// src/Translation/translations.js
import es from "../../assets/es.svg";
import Ar from "../../assets/sy.svg";
import tr from "../../assets/tr.svg";
import En from "../../assets/us.svg";
export const languages = [
  { code: "en", name: "English", flag: En },
  { code: "ar", name: "العربية", flag: Ar },
  { code: "es", name: "Español", flag: es },
  { code: "tr", name: "Türkçe", flag: tr },
  { code: "ku", name: "Kurdî", flag: Ar },
];

// src/components/Translation/translations.js

export const translations = {
  en: {
    // ... المفاتيح الموجودة أصلًا ...
    welcomeBack: "Welcome Back",
    loginMsg: "Please login to your account",
    username: "Username",
    password: "Password",
    loginBtn: "Login",
    loginWithGoogle: "Login with Google",
    loginWithGitHub: "Login with GitHub",
    loginWithFacebook: "Login with Facebook",
    showPassword: "Show password",
    hidePassword: "Hide password",
    loginClicked: "Login clicked",
    or: "OR",
    forgotPassword: "Forgot password?",
    dontHaveAccount: "Don’t have an account?",
    signUp: "Sign up",

    // **هنا نجمع المفاتيح الجديدة للفوتر:**
    privacyPolicyLabel: "Privacy Policy",
    allRightsReserved: "| All rights reserved © 2025",
  },
  ar: {
    welcomeBack: "مرحبا بعودتك",
    loginMsg: "يرجى تسجيل الدخول إلى حسابك",
    username: "اسم المستخدم",
    password: "كلمة المرور",
    loginBtn: "تسجيل الدخول",
    loginWithGoogle: "تسجيل الدخول عبر جوجل",
    loginWithGitHub: "تسجيل الدخول عبر جيتهاب",
    loginWithFacebook: "تسجيل الدخول عبر فيسبوك",
    showPassword: "إظهار كلمة المرور",
    hidePassword: "إخفاء كلمة المرور",
    loginClicked: "تم الضغط على تسجيل الدخول",
    or: "أو",
    forgotPassword: "نسيت كلمة المرور؟",
    dontHaveAccount: "ليس لديك حساب؟",
    signUp: "سجل الآن",

    // **المفاتيح نفسها للفوتر لكن بالعربية:**
    privacyPolicyLabel: "سياسة الخصوصية",
    allRightsReserved: "| جميع الحقوق محفوظة © 2025",
  },
  es: {
    welcomeBack: "Bienvenido de nuevo",
    loginMsg: "Por favor inicia sesión en tu cuenta",
    username: "Nombre de usuario",
    password: "Contraseña",
    loginBtn: "Iniciar sesión",
    loginWithGoogle: "Iniciar sesión con Google",
    loginWithGitHub: "Iniciar sesión con GitHub",
    loginWithFacebook: "Iniciar sesión con Facebook",
    showPassword: "Mostrar contraseña",
    hidePassword: "Ocultar contraseña",
    loginClicked: "Inicio de sesión pulsado",
    or: "O",
    forgotPassword: "¿Olvidaste tu contraseña?",
    dontHaveAccount: "¿No tienes una cuenta?",
    signUp: "Regístrate",

    // **ترجمة الفوتر بالإسبانية:**
    privacyPolicyLabel: "Política de privacidad",
    allRightsReserved: "| Todos los derechos reservados © 2025",
  },
  tr: {
    welcomeBack: "Tekrar Hoş Geldiniz",
    loginMsg: "Lütfen hesabınıza giriş yapın",
    username: "Kullanıcı adı",
    password: "Şifre",
    loginBtn: "Giriş yap",
    loginWithGoogle: "Google ile giriş yap",
    loginWithGitHub: "GitHub ile giriş yap",
    loginWithFacebook: "Facebook ile giriş yap",
    showPassword: "Şifreyi göster",
    hidePassword: "Şifreyi gizle",
    loginClicked: "Giriş tıklandı",
    or: "VEYA",
    forgotPassword: "Şifrenizi mi unuttunuz?",
    dontHaveAccount: "Hesabınız yok mu?",
    signUp: "Kayıt ol",

    // **ترجمة الفوتر بالتركي:**
    privacyPolicyLabel: "Gizlilik Politikası",
    allRightsReserved: "| Tüm hakları saklıdır © 2025",
  },
  ku: {
    welcomeBack: "Bi xêr hatî",
    loginMsg: "Ji kerema xwe hesabê xwe ve bike",
    username: "Navê bikarhêner",
    password: "Şîfre",
    loginBtn: "Têkeve",
    loginWithGoogle: "Bi Google re têkeve",
    loginWithGitHub: "Bi GitHub re têkeve",
    loginWithFacebook: "Bi Facebook re têkeve",
    showPassword: "Şîfre nîşan bide",
    hidePassword: "Şîfreyê veşêre",
    loginClicked: "Têkevin hate klik kirin",
    or: "AN",
    forgotPassword: "Şîfreya xwe ji bîr kir?",
    dontHaveAccount: "Hesabek te tune ye?",
    signUp: "Tomar bike",

    // **ترجمة الفوتر بالكردي:**
    privacyPolicyLabel: "سیاسەی مافەکان",
    allRightsReserved: "| هەموو مافەکان پارێزراون © 2025",
  },
};
