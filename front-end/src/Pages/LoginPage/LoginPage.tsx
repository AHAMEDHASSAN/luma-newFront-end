import i18n from "../../components/Translation/i18n";
import LoginHeader from "./LoginHeader";
import LoginInputs from "./LoginInputs";
import LoginSocial from "./LoginSocial";
const LoginPage = () => {
  return (
    <>
      <LoginHeader />
      <LoginInputs langCode={i18n.language} />
      <LoginSocial />
    </>
  );
};

export default LoginPage;
