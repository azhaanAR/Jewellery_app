 import Navbar from "./Components/HomeComponents/Navbar/Navbar";
 import Footer from "./Components/Footer/Footer";
 import Home1 from "./Components/Home/Home1";
 import Cart from "./Components/Pages/Cart"
 import Blog from "./Components/Pages/Blog";
 import PrivateComp from "./Components/SignLog/PrivateComp";
 import Profile from "./Components/Pages/profile";
 import Address from "./Components/Pages/address";
 import Sign from "./Components/SignLog/Sign";
 import Log from "./Components/SignLog/Log";
 import ProductImages from "./Components/ProductPage/ProductImages";
 import {BrowserRouter, Route, Routes} from 'react-router-dom'
 
 


function App () {


  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route element={<PrivateComp/>}>
    <Route path = "/" element={<Home1/>}/>
    <Route path = "/cart" element={<Cart/>}/>
    <Route path = "/blog" element={<Blog/>}/>
    <Route path = "/items" element={<ProductImages/>}/> 
    <Route path="/add" element={<Address/>}/>
    <Route path="pro" element={<Profile/>}/>
    </Route>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/log" element={<Log/>}/>
   </Routes>
   <Footer/>               
   </BrowserRouter>
   </>
  );
}

export default App;
