import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";

import { CursosProvider } from "./ProyectoTecclas/useContext/CursosProvider";

import { PageIndex } from "./ProyectoTecclas/PageIndex";

function App() {
  return (
    <Router>
      <CursosProvider>
        <Header />
        <Routes>
          {/* ruta outlet */}
          {/* <Route path="/" element={<Pages />}></Route> */}

          <Route path="/tecclas" element={<PageIndex />}></Route>
        </Routes>
      </CursosProvider>
    </Router>
  );
}

export default App;
