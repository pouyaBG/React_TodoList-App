import { useState } from 'react';
import { postLoginData } from '../../../services/postApi';
import { toast } from 'react-toastify';
const LoginPage = () => {
  const [filds, setfields] = useState({
    userName: '',
    password: '',
  });
  const changeHandler = (e) => {
    setfields({
      ...filds,
      [e.target.name]: e.target.value,
    });
  };
  const postHandler = (e) => {
    e.preventDefault();
    if (filds.userName === '' && filds.password === '') {
      toast.warning('Please fill all the fields');
    } else {
      postLoginData(filds)
        .then((res) => {
          // allow entry
          window.location.href = '/todo';
        })
        .catch((err) => {
          // Do not allow entry
          toast.warning('User name or password is incorrect');
        });
    }
  };
  return (
    <form>
      <div className='form-group'>
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
        <div className='form-group-btn'>
          <button type='submit' className='btn-submit' onClick={postHandler}>
            login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
