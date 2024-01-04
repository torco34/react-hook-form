import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/app.css";
import { UserLogicProvider } from "./useContext/UseLogicProvider";
import { HooksAllProvider } from "./useContext/HooksAllProvider";
import { PrivateRouter } from "./components/PrivateRouter";
import { HomePage, PerfilStudyPage, DashboardPage } from "./page";
import { Footer } from "./components/header/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <UserLogicProvider>
          <HooksAllProvider>
            <Routes>
              <Route path="/" element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<DashboardPage />} />
                <Route
                  path="dashboard"
                  element={
                    <PrivateRouter>
                      <PerfilStudyPage />
                    </PrivateRouter>
                  }
                />
              </Route>
            </Routes>
            <Footer />
          </HooksAllProvider>
        </UserLogicProvider>
      </Router>
    </div>
  );
}

export default App;
