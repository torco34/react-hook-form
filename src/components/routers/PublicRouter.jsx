import { Route, Routes } from "react-router-dom";

import { DashboardPage } from "../../page/DashboardPage";
import { HomePage } from "../../page/HomePage";
import { PrivateLayout } from "../layout/PrivateLayout";

export const PublicRouter = () => (
    <>
      <PrivateLayout />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<DashboardPage />} />aa
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );