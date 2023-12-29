import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import "./assets/css/app.css";
import { UserLogicProvider } from "./useContext/UseLogicProvider";
// import { CursosProvider } from "./ProyectoTecclas/useContext/CursosProvider";
import { HooksAllProvider } from "./useContext/HooksAllProvider";

import { EnrollCoursePage, HomePage, PerfilStudyPage } from "./page";
import { CredentialForm } from "./components/CredentialForm";
import {} from "./page/PerfilStudyPage";
import { PrivateRouter } from "./components/PrivateRouter";

function App() {
  return (
    <div className="app">
      <Router>
        <UserLogicProvider>
          <HooksAllProvider>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<CredentialForm />} />
                <Route
                  path="dashboard"
                  element={
                    <PrivateRouter>
                      <PerfilStudyPage />
                    </PrivateRouter>
                  }
                />
                <Route path="enrollment" element={<EnrollCoursePage />} />
              </Route>
            </Routes>
          </HooksAllProvider>
        </UserLogicProvider>
      </Router>
    </div>
  );
}

export default App;
