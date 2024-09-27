import { Footer, Header, JsPreloader } from "./components";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Checkout, Products, ProductDetails } from "./pages";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
