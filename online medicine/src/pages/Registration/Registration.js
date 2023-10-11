import { useState } from 'react';
import { addDoc, collection } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firestore } from '../../firebase/firebase';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const ref = collection(firestore, 'users'); // Firebase creates this automatically
    try {
      addDoc(ref, formData);
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
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
    <form id='form' onSubmit={handleSubmit}>
      <p>Sign up once and watch our free things.</p>

      <div className='form-group'>
        <label htmlFor='name'>Your Name</label>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Enter Your Name'
            name='name'
            value={formData?.name}
            onChange={updateFormData}
            required
          />
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Your Email</label>
        <div className='input-group'>
          <input
            type='email'
            placeholder='Enter Your Email'
            name='email'
            value={formData?.email}
            onChange={updateFormData}
            pattern='[\d\._\-]+@ [a-z]+\.[a-z]{2-3}'
            title='any specialsymbol(".""_""-")and one upper case'
            required />
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='username'>Your Username</label>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Enter Your Username'
            name='username'
            value={formData?.username}
            onChange={updateFormData} 
            required/>
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
            required/>
        </div>
      </div>

      <div className='form-group'>
        <label htmlFor='password-confirm'>Confirm Your Password</label>
        <div className='input-group'>
          <input
            type='password'
            id='confirmPassword'
            placeholder='Confirm Your Password'
            name='confirmPassword'
            value={formData?.confirmPassword}
            onChange={updateFormData} 
            required/>
        </div>
      </div>

      <button type='submit' className='btn btn-default' onClick={handleSubmit}>
        Register
      </button>
    </form>
  );
};
export default Registration;
