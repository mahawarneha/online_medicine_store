import { useContext, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../firebase/firebase';
import { UserContext } from '../../App';

import './Login.css';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchUsers = async () => {
      await getDocs(collection(firestore, 'users')).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        const getRequestedUser = newData.find(
          (user) => user.username === formData.username
        );

        if (getRequestedUser) {
          const loggedInUser = {
            isLoggedIn: true,
            ...getRequestedUser,
          };
          setUser(loggedInUser);
          navigate('/products/syrup');
        } else {
          const loggedOutUser = {
            isLoggedIn: false,
            error: 'user not found',
          };
          setUser(loggedOutUser);
        }
      });
    };
    fetchUsers();
  };

  const updateFormData = (e) => {
    const { name } = e.target;
    const inputData = { [name]: e.target.value };

    setFormData((preState) => {
      return {
        ...preState,
        ...inputData,
      };
    });
  };

  return (
    <>
      <form id='form' onSubmit={handleSubmit}>
        <p>Please Login here.</p>

        <div className='form-group'>
          <label htmlFor='username'>Your Username</label>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Enter Your Username'
              name='username'
              value={formData?.username}
              onChange={updateFormData}
            />
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Your Password</label>
          <div className='input-group'>
            <input
              type='password'
              placeholder='Enter Your Password'
              name='password'
              value={formData?.password}
              onChange={updateFormData}
            />
          </div>
        </div>
        <div> {user?.error}</div>

        <button
          type='submit'
          className='btn btn-default'
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
