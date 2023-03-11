import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import React from "react";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className={"container"}>
          <HeaderComponent></HeaderComponent>
          <Routes>
            <Route path={"/auth"} element={<AuthComponent />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
