import React from "react";
import Navbar from "./component/Navbar";
import User from "./component/User";
import AppProvider from "./context/AppProvider";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
     {/* <AppProvider> */}
     <ThemeProvider>
        <Navbar />
        </ThemeProvider>
      <div className="text-red-700">

        <User />
      </div>
      {/* </AppProvider> */}
    </>
  );
};

export default App;
