import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importing components
import Submit from "./routes/Submit.jsx";
import App from "./components/App.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
