import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Navbar from './components/Navbar/navbar';
import Categories from './components/categories/Categories';
import Carousel from './components/Carousel/carousel'
import "./App.css";
import Folder from './components/folderexplorer/Folder';
import jsonData from "./components/folderexplorer/folderData.json"
import ProductList from './components/ListItem/ProductList';
import { MyInterceptor } from './utils/MyInterceptor';
// import { Route, Routes } from 'react-router-dom';
// import Home from './components/Routing/Home';
// import AboutUs from './components/Routing/AboutUs';
// import Career from './components/Routing/Career';
// import ContactUs from './components/Routing/ContactUs';
// import NotFound from './components/Routing/NotFound';

export default function App(props) {

  MyInterceptor();
  // requestStartedInterceptor();
  // responseReceivedInterceptor();

// let name = 'Mahi'
  // console.log(addition(2,3))
  return <div>
     {/* <Header /> */}
     <Navbar />
    {/* <Categories /> */}
    {/* <Carousel /> */}
      <Main name={props.name}/>
     {/* <ProductList /> */}
     {/* <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/home" element={<Home />} />
       <Route exact path="/aboutus" element={<AboutUs />} />
       <Route exact path="/career" element={<Career />} />
       <Route exact path="/contactus" element={<ContactUs />} />
       <Route path="*" element={<NotFound />} />
      </Routes> */}

     <Footer />
    </div>
}
