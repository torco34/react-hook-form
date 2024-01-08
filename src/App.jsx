import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/app.css";

import { HooksAllProvider } from "./useContext/HooksAllProvider";
import { PrivateRouter } from "./components/PrivateRouter";
import { HomePage, PerfilStudyPage, DashboardPage } from "./page";
import { Footer } from "./components/header/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <HooksAllProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="login" element={<DashboardPage />} />
            <Route
              path="dashboard"
              element={
                <PrivateRouter>
                  <PerfilStudyPage />
                </PrivateRouter>
              }
            />
          </Routes>
          <Footer />
        </HooksAllProvider>
      </Router>
    </div>
  );
}

export default App;
