import React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};
export default App;
