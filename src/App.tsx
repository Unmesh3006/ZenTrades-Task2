import React from "react";

import "./App.css";
import Page from "./components/page.component";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Page />
    </>
  );
}

export default App;