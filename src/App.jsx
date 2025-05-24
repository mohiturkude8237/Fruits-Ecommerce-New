// import React from "react";
// import Navbar from "./components/Navbar";
// import { assets } from "./assets/assets";
// import { Route, Routes } from "react-router-dom";
// import Home from './pages/Home'
// import Products from './pages/Products'
// import About from './pages/About'
// import Shop from './pages/Shop'
// import Contacts from './pages/Contacts'


// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/products' element={<Products />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/shop' element={<Shop />} />
//         <Route path='/contacts' element={<Contacts />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
