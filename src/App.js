import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Cards from "./components/Cards";
import CardDetails from "./components/CardDetails";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cards/>}/>
          {/* <Route path="/cart" element={<CardDetails/>}/> */}
          <Route path="/cartDetails/:id" element={<CardDetails/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
