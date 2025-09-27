import { BrowserRouter, Routes, Route } from "react-router-dom";
import Revolio from './Revolio';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import {Bounce, ToastContainer} from 'react-toastify';
import Job from "./components/Job";
import Mision from "./components/Mision";

function App() {
  return (
    <>
    <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Revolio />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
