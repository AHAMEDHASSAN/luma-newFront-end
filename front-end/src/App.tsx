import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DarkModeProvider } from "./components/DarkMod/DarkModeContext";
import Footer from "./components/Footer/Footer";
import HeaderPage from "./components/Header/HeaderPage";
import "./components/Translation/i18n";
import LoginHeader from "./Pages/LoginPage/LoginHeader";
import LoginInputs from "./Pages/LoginPage/LoginInputs";
import LoginSocial from "./Pages/LoginPage/LoginSocial";
import "./style.module.css";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const rtlLanguages = ["ar", "ku"];
    document.body.dir = rtlLanguages.includes(i18n.language) ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <DarkModeProvider>
      <div style={{ minHeight: "100vh" }}>
        <Container maxWidth="xl" key={i18n.language}>
          <HeaderPage />
          <LoginHeader />
          <LoginInputs langCode={i18n.language} />
          <LoginSocial />
          <Footer />
        </Container>
      </div>
    </DarkModeProvider>
  );
}

export default App;
