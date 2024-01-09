import React from "react";
import "../assets/css/loading.css";

import { Spin } from "antd";
export const Loading = () => {
  return (
    <div className="loading" loading>
      <h2 className="text-dark">
        <Spin tip="Cargando..." size="large"></Spin>
      </h2>
    </div>
  );
};
