import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import "./assets/css/app.css";
import { UserLogicProvider } from "./useContext/UseLogicProvider";
// import { CursosProvider } from "./ProyectoTecclas/useContext/CursosProvider";
import { HooksAllProvider } from "./useContext/HooksAllProvider";
// import { PageIndex } from "./ProyectoTecclas/PageIndex";
import { Home } from "./page/Home";
import { PageEnrollCourse } from "./page/PageEnrollCourse";
import { CredentialForm } from "./components/CredentialForm";
function App() {
  return (
    <div className="app">
      <Router>
        <UserLogicProvider>
          <HooksAllProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/page" element={<PageEnrollCourse />}></Route>
              <Route path="/login" element={<CredentialForm />}></Route>
            </Routes>
          </HooksAllProvider>
        </UserLogicProvider>
      </Router>
    </div>
  );
}

export default App;
