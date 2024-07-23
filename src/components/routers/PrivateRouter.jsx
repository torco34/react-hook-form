import { Route, Routes } from "react-router-dom";

import { HomePage } from "../../page/HomePage";
import { PerfilStudyPage } from "../../page/PerfilStudyPage";
import { PrivateLayout } from "../layout/PrivateLayout";
export const PrivateRouter = ({user}) => (
    <>
    <PrivateLayout user={user} />
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="dashboard" element={< PerfilStudyPage/>} />
      <Route
        path="dashboard"
        element={
          <PrivateRouter>
            <PerfilStudyPage />
          </PrivateRouter>
        }
      />
    </Routes>
  
  </>
  );
