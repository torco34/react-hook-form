import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";

import { CursosProvider } from "./ProyectoTecclas/useContext/CursosProvider";
import { HooksAllProvider } from "./useContext/HooksAllProvider";
import { PageIndex } from "./ProyectoTecclas/PageIndex";
import { Home } from "./page/Home";
import { PageEnrollCourse } from "./page/PageEnrollCourse";
function App() {
  return (
    <Router>
      <CursosProvider>
        <HooksAllProvider>
          <Header />
          <Routes>
            {/* ruta outlet */}page
            <Route path="/" element={<Home />}></Route>
            <Route path="/page" element={<PageEnrollCourse />}></Route>
            {/* <Route path="/login" render={() => (loggedIn ? <Redirect to="/dashboard" /> : <LoginForm onLogin={handleLogin} />)}></Route> */}
            <Route path="/tecclas" element={<PageIndex />}></Route>
          </Routes>
        </HooksAllProvider>
      </CursosProvider>
    </Router>
  );
}

export default App;
