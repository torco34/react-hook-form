import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { PrivateRouter } from "./components/PrivateRouter";
import { Footer } from "./components/header/Footer";
import { MainLayout } from "./components/routers/MainLayout";
import { DashboardPage } from "./page/DashboardPage";
import { HomeEstudiante } from "./page/HomeEstudiante";
import { HomePage } from "./page/HomePage";
import { PerfilStudyPage } from "./page/PerfilStudyPage";
import { HooksAllProvider } from "./useContext/HooksAllProvider";

import "./assets/css/app.css";


// import { MainApp } from "./components/routers/MainApp";
function App() {
  return (
    <div className="app">
      <Router>
        <HooksAllProvider>
          {/* <Header /> */}
<MainLayout>
          <Routes>
            <Route path="" element={<HomePage />} />
            
            <Route path="login" element={<DashboardPage />} />
            <Route path="study" element={<HomeEstudiante />} />
            <Route path="/perfil" element={<PerfilStudyPage />} />
            <Route
              path="dashboard"
              element={
                <PrivateRouter>
                  <PerfilStudyPage />
                </PrivateRouter>
              }
            />
          </Routes>
        {/* <MainApp/> */}
        </MainLayout>
          <Footer />
        </HooksAllProvider>
      </Router>
    </div>
  );
}

export default App;
