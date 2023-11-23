import { useState } from "react";
import { Pages } from "./curso-antd/page/Pages";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { BotonesAntd } from "./curso-antd/components/BotonesAntd";
import { IconosAntd } from "./curso-antd/components/IconosAntd";
import { TipografAntd } from "./curso-antd/components/TipografAntd";

import { FormStudy } from "./RetoTwo/FormStudy";

import { PagesCurso } from "./components/Curso-react-hook-from/PagesCurso";
import { Proyecto } from "./proyecto/Proyecto";
import { Bor } from "./RetoTwo/Bor";
import Borrador from "./RetoTwo/Borrador";
import { PonerleHoras } from "./RetoTwo/PonerleHoras";
import { CursosProvider } from "./ProyectoTecclas/useContext/CursosProvider";
import { Practicas } from "./RetoTwo/Practicas";
import { PageIndex } from "./ProyectoTecclas/PageIndex";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <CursosProvider>
        <Header />
        <Routes>
          {/* ruta outlet */}
          <Route path="/pages" element={<Pages />}></Route>
          <Route path="/bot" element={<BotonesAntd />}></Route>
          <Route path="/icon" element={<IconosAntd />}></Route>
          <Route path="/tipo" element={<TipografAntd />}></Route>

          <Route path="/stud" element={<FormStudy />}></Route>
          <Route path="/practicas" element={<Practicas />}></Route>
          <Route path="/page" element={<PagesCurso />}></Route>
          <Route path="/proyecto" element={<Proyecto />}></Route>
          <Route path="/bor" element={<Bor />}></Route>
          <Route path="/borrador" element={<Borrador />}></Route>
          <Route path="/horas" element={<PonerleHoras />}></Route>
          <Route path="/tecclas" element={<PageIndex />}></Route>

          <Route path="/proyecto" element={<Proyecto />}></Route>
        </Routes>
      </CursosProvider>
    </Router>
  );
}

export default App;
