import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
import UpdateData from "./pages/UpdateData";

 function App() {

  return (
      <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/edit/:id" element={<UpdateData/>}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
  );
}
export default App