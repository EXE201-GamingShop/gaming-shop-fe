import { Footer, Header, JsPreloader } from "./components";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <JsPreloader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />  
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;