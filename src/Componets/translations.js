// translations.js
import esIma from "../Images/es.svg";
import arIma from "../Images/sy.svg";
import enIma from "../Images/us.svg";
export const languages = [
  { code: "en", name: "English", flag: enIma },
  { code: "ar", name: "العربية", flag: arIma },
  { code: "es", name: "Español", flag: esIma },
  { code: "tr", name: "Türkçe", flag: "https://flagcdn.com/w80/tr.png" },
  { code: "ku", name: "Kurdî", flag: arIma },
];

export const translations = {
  en: {
    welcome: "Welcome Back",
    loginMsg: "Please login to your account",
    username: "Username",
    password: "Password",
    loginBtn: "Login",
    forgotPassword: "Forgot password?",
    signup: "Don't have an account? Sign up",
    privacyPolicy: "Privacy Policy",
    allRights: "All rights reserved © 2025",
  },
  ar: {
    welcome: "مرحبا بعودتك",
    loginMsg: "يرجى تسجيل الدخول إلى حسابك",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    loginBtn: "تسجيل الدخول",
    forgotPassword: "هل نسيت كلمة المرور؟",
    signup: "ليس لديك حساب؟ سجل الآن",
    privacyPolicy: "سياسة الخصوصية",
    allRights: "كل الحقوق محفوظة © 2025",
  },
  es: {
    welcome: "Bienvenido de nuevo",
    loginMsg: "Por favor inicia sesión en tu cuenta",
    username: "Nombre de usuario",
    password: "Contraseña",
    loginBtn: "Iniciar sesión",
    forgotPassword: "¿Olvidaste tu contraseña?",
    signup: "¿No tienes una cuenta? Regístrate",
    privacyPolicy: "Política de privacidad",
    allRights: "Todos los derechos reservados © 2025",
  },
  tr: {
    welcome: "Tekrar Hoş Geldiniz",
    loginMsg: "Lütfen hesabınıza giriş yapın",
    username: "Kullanıcı adı",
    password: "Şifre",
    loginBtn: "Giriş yap",
    forgotPassword: "Şifrenizi mi unuttunuz?",
    signup: "Hesabınız yok mu? Kayıt ol",
    privacyPolicy: "Gizlilik Politikası",
    allRights: "Tüm hakları saklıdır © 2025",
  },
  ku: {
    welcome: "Bi xêr hatî",
    loginMsg: "Ji kerema xwe hesabê xwe ve bike",
    username: "Navê bikarhêner",
    password: "Şîfre",
    loginBtn: "Têkeve",
    forgotPassword: "Şîfreya xwe ji bîr kirî?",
    signup: "Hesabek te tune? Qeyd bibin",
    privacyPolicy: "Siyaseta nepenî",
    allRights: "Hemû maf parastî ye © 2025",
  },
};
