import { ThemeProvider } from "styled-components";
import "./index.css";
import { theme } from "./styles/theme";
import { Header } from "./layout/Header";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./app/router";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
