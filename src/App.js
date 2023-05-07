import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Products from './components/Products';
import Product from './components/Product';
import Forms from './components/Form';


function App() {

  // <Routes>
  //   <Route path="/" element={< Home />} />
  //   <Route index element={<Home />} />
  //   <Route path="/Products" element={<Products />} />

  //   <Route path="/Product/:id" element={<Product />} />

  // </Routes>
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route index element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Product/:name" element={<Product />} />
        <Route path="/Forms/:name" element={<Forms/>} />

      </Routes>




    </>
  )
}

export default App;
