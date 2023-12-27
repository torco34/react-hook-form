import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import "./assets/css/app.css";

// import { CursosProvider } from "./ProyectoTecclas/useContext/CursosProvider";
import { HooksAllProvider } from "./useContext/HooksAllProvider";
// import { PageIndex } from "./ProyectoTecclas/PageIndex";
import { Home } from "./page/Home";
import { PageEnrollCourse } from "./page/PageEnrollCourse";
function App() {
  return (
    <div className="app">
      <Router>
        {/* <CursosProvider> */}
        <HooksAllProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/page" element={<PageEnrollCourse />}></Route>
          </Routes>
        </HooksAllProvider>
        {/* </CursosProvider> */}
      </Router>
    </div>
  );
}

export default App;
