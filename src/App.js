/** @format */
import { ToastContainer } from "react-toastify";

import "./App.scss";
import TodoApp from "./components/TodoApp";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <h1>TodoList App</h1>
      <TodoApp />
      <ToastContainer
        position="top-right"
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
  );
}

export default App;
