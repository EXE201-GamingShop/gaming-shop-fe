import { Footer, Header, JsPreloader } from "./components";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Checkout, Products, ProductDetails, Register } from "./pages";
import Account1 from "./pages/Account";
import NotFound from "./pages/NotFound";
import { Client, Account } from "appwrite";
import { useState } from "react";


function App() {

  const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);
  const account = new Account(client);

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <JsPreloader />
        <Header user={user} setUser={setUser} account={account} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/login" element={<Login account={account} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account1 />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
