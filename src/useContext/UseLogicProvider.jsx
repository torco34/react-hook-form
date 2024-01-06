import React, { createContext, useContext, useState } from "react";
import { useHookCourse } from "./HooksAllProvider";
const UserAuthContext = createContext();

export const UserLogicProvider = ({ children }) => {

  const ReusableLogicContext = {
    //HOOK DE SERVICIO DE API
  };
  return (
    <UserAuthContext.Provider value={{ ReusableLogicContext }}>
      {children}
    </UserAuthContext.Provider>
  );
};
export function userLogic() {
  return useContext(userLogic);
}
