import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import { medicineProducts } from '../../data/products';

import './Product.css';

export default function Product({ onAdd, onDelete }) {
  const { productId } = useParams();
  const contacts = [
    { id: 'syrup', name: 'Syrup', favorite: false },
    { id: 'tablets', name: 'Tablets', favorite: false },
    { id: 'skincare', name: 'Skin Care', favorite: false },
    { id: 'vitamin', name: 'Vitamin and Suppliment', favorite: false },
    { id: 'sugical', name: 'SurgicalAcces', favorite: false },
    { id: 'mesurement', name: 'Mesurement', favorite: false },
  ];
  const medicineData = medicineProducts.filter(
    (product) => product.category === productId
  );
  return (
    <div id='productList'>

      <div className='product-list'>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/products/${contact.id}`}>
              {contact.name} {contact.favorite && <span>★</span>}
            </Link>
          </li>
          
        ))}
      </ul>
      </div>
      

      <div className='product-items'>
        {medicineData?.map((product) => <ProductItem key={product.productId} onAdd={onAdd} product={product} onDelete={onDelete} />)}

        {!medicineData.length && <div>You have lost your way!</div>}
      </div>
      <div><button>
        <Link to="/shopping-bag">CheckOut</Link>
        </button> 
        </div> 
    </div>
           

  );
}
