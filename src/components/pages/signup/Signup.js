import { useState } from 'react';
import { postUserData } from '../../../services/postApi';
import { toast } from 'react-toastify';
import '../signup/css/signup.css';
const SignupPage = () => {
  const [fields, setfields] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    setfields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };
  // post
  const postHandler = (e) => {
    const confirmPassword = document.getElementById('confirmPassword');
    e.preventDefault();
    if (
      fields.userName === '' &&
      fields.email === '' &&
      fields.password === ''
    ) {
      toast.warning('Please fill all the fields');
    } else if (fields.password !== confirmPassword.value) {
      toast.warning('Password does not match with confirm password');
    } else {
      postUserData(fields)
        .then((res) => {
          // allow entry
          window.location.href = '/todo';
        })
        .catch((err) => {
          // Do not allow entry
          toast.warning('User name already exists');
        });
    }
  };
  const loginpage = (e) => {
    // go to login page
    e.preventDefault();
    window.location.href = '/login';
  };
  return (
    <form>
      <div className='form-group'>
        <div className='email-field'>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' onChange={changeHandler} />
        </div>
        <div className='userName-field'>
          <label htmlFor='userName'>user Name</label>
          <input
            type='userName'
            id='userName'
            name='userName'
            onChange={changeHandler}
          />
        </div>
        <div className='password-field'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            onChange={changeHandler}
          />
        </div>
        <div className='confirmPassword-field'>
          <label htmlFor='confirmPassword'>confirm Password</label>
          <input type='passsword' id='confirmPassword' name='confirmPassword' />
        </div>
        <div className='form-group-btn'>
          <button type='submit' className='btn-submit' onClick={postHandler}>
            sign up
          </button>
          <button type='button' className='btn-submit' onClick={loginpage}>
            login
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupPage;
