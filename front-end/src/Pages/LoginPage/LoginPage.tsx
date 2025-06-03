import { useDarkMode } from "../../components/DarkMod/DarkModeContext";
import i18n from "../../components/Translation/i18n";
import LoginHeader from "./LoginHeader";
import LoginInputs from "./LoginInputs";
import LoginSocial from "./LoginSocial";

const LoginPage = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <LoginHeader />
      <LoginInputs darkMode={darkMode} langCode={i18n.language} />
      <LoginSocial darkMode={darkMode} />
    </>
  );
};

export default LoginPage;
