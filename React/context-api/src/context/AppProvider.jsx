import React from "react";
import { UserProvider } from "../context/UserContext";
import { ThemeProvider } from "./ThemeContext";

const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <UserProvider>
        {children}
      </UserProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
