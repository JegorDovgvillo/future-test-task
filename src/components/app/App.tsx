import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "../mainPage/MainPage";
import BookPage from "../bookPage/BookPage";
import React from "react";
import Header from '../header/Heder'
import Footer from '../footer/Footer'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="" element={<MainPage />}></Route>
        <Route path="/BookPage/:id" element={<BookPage />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
