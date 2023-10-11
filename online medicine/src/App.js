import React, { useReducer, createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { doc, updateDoc } from '@firebase/firestore';
import { firestore } from './firebase/firebase';

import Home from './pages/home';
import About from './pages/about';
import Product from './pages/products';
import Header from './components/Header/Header';
import Cart from './pages/cart';

import './App.css';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';

export const UserContext = createContext();
const initialCartItems = [];

function App() {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, initialCartItems);
  const [user, setUser] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (user?.isLoggedIn) {
      setTotalItems(user.items);
      const addItemsToUser = async (e) => {
        const ref = doc(firestore, 'users', user.id);
        await updateDoc(ref, {
          items: totalItems + 1,
        });
      };

      addItemsToUser();
    }
  }, [user, cartItems]);

  const handleAddItem = (cartItem) => {
    dispatch({
      type: 'add',
      productName: cartItem.productName,
      image: cartItem.image,
      price: cartItem.price,
      description: cartItem.description,
      category: cartItem.category,
      productId: cartItem.productId,
      quantity: 1,
    
    });
  };

  const handleDeleteItem = (productId) => {
    dispatch({
      type: 'delete',
      productId,
    });
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div>
          <nav>
            <Header cartItems={cartItems} />
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route
              path='/products/:productId'
              element={
                <Product
                  cartItems={cartItems}
                  onDelete={handleDeleteItem}
                  onAdd={handleAddItem}
                />
              }
            />
            <Route
              path='/shopping-bag'
              element={
                <Cart
                  cartItems={cartItems}
                  onDelete={handleDeleteItem}
                  onAdd={handleAddItem}
                />
              }
            />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

function cartItemsReducer(cartItems, action) {
  switch (action.type) {
    case 'add': {
      if (cartItems.length) {
        const findById = cartItems.find((item) => item.productId === action.productId);
        const filterExistingItem = cartItems.filter(
          (item) => item.productId !== action.productId
        );
        if (!findById) {
          return [...cartItems, { ...action, totalPrice: action.price }];
        }

        return [
          ...filterExistingItem,
          {
            ...findById,
            quantity: findById.quantity + 1,
            totalPrice: findById.totalPrice + action.price,
          },
        ];
      } else {
        return [{ ...action, totalPrice: action.price }];
      }
    }
    case 'delete': {
      const updatedCartItems = cartItems.filter(
        (item) => item.productId !== action.productId
      );
      return updatedCartItems;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default App;
