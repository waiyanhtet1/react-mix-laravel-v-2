import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import ax from "../config/ax";

const AuthContext = createContext();
const token = localStorage.getItem("token");

export const AuthContextProvider = (props) => {
  const [authUser, setAuthUser] = useState({});

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
