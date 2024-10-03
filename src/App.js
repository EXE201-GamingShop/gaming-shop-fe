import { Footer, Header, JsPreloader } from "./components";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Checkout, Products, ProductDetails, Register } from "./pages";
import Account from "./pages/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <JsPreloader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
