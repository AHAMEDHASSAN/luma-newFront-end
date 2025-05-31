import Container from "@mui/material/Container";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DarkModeProvider } from "./components/DarkMod/DarkModeContext";
import Footer from "./components/Footer/Footer";
import HeaderPage from "./components/Header/HeaderPage";
import LoginFrom from "./components/Pages/LoginFrom";
import "./components/Translation/i18n";
import "./style.module.css";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    // لغات RTL ممكن تضيف لغات أخرى إذا احتجت
    const rtlLanguages = ["ar", "ku"];
    document.body.dir = rtlLanguages.includes(i18n.language) ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <DarkModeProvider>
      <div style={{ minHeight: "100vh" }}>
        {/* key يجعل التطبيق يُعاد رسمه عند تغيير اللغة */}
        <Container maxWidth="lg" key={i18n.language}>
          <HeaderPage />
          <LoginFrom />
          <Footer />
        </Container>
      </div>
    </DarkModeProvider>
  );
}

export default App;
