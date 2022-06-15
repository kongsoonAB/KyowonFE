import "./App.css";
import { createGlobalStyle } from "styled-components";
import { MainPage } from "./Page/Main";
import { Header } from "Header/Header";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { UploadPage } from "./Page/Test";
import { LoadingPage } from "./Page/Loading";
import { UploadBody } from "./Body/UploadBody";
import { TestPage } from "./Page/Test";
import { LoadingBody } from "./Body/LoadingBody";

function App() {
  const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
  `;
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="test" element={<TestPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
