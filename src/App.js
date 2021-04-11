import React from "react";
import { ThemeProvider } from "styled-components";
import {theme} from "./config/theme";
import TopBar from "./TopBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopBar.Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
