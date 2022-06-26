/** @format */
// import react from "react";
import { ToastContainer } from 'react-toastify';
import './App.scss';
import TodoApp from './components/pages/TodoApp';
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from '../src/components/pages/signup/Signup';
import LoginPage from './components/pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { getTodos } from "../services/getApi.js";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>TodoList App</h1>
        <Routes>
          <Route path='/' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/todo' element={<TodoApp />} />
        </Routes>
        
        <ToastContainer
          position='top-right'
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          // theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
