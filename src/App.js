import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './component/pages/Home';
import MenCollectionPage from './component/pages/MenCollectionPage';
import SneakersCollection from './component/pages/SneakersCollection';
import ShopWears from './component/pages/ShopWears';
import ViewProduct from './component/pages/ViewProduct';
import SwimSuit from './component/pages/SwimSuit';
import Jewelry from './component/pages/Jewelry';
import WeddingCollection from './component/pages/WeddingCollection';
import About from './component/pages/About';
import UserInformation from './component/pages/UserInformation';
import Cart from './component/pages/Cart';
import WomenWear from './component/pages/WomenWear';
import SignInPage from './component/pages/SignInPage';
import SignUpPage from './component/pages/SignUpPage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NeophyteProvider from "./component/Context/NeophyteContext";

function App() {
  return (
    <div className="App">
      <NeophyteProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/WomenWear' element={<WomenWear/>} />
            <Route path='/MenCollectionPage' element={<MenCollectionPage />} />
            <Route path='/SneakersCollection' element={<SneakersCollection />} />
            <Route path='/ShopWears' element={<ShopWears />} />
            <Route path='/SwimSuit' element={<SwimSuit />} />
            <Route path='/Jewelry' element={<Jewelry />} />
            <Route path='/WeddingCollection' element={<WeddingCollection />} />
            <Route path='/About' element={<About />} />
            <Route path='/ViewProduct/:_id' element={<ViewProduct/>} />
            <Route path='/UserInformation' element={<UserInformation />} />
            <Route path='/SignInPage' element={<SignInPage />} />
            <Route path='/SignUpPage' element={<SignUpPage />} />
            <Route path='/Cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </NeophyteProvider>
    </div>
  );
}

export default App;