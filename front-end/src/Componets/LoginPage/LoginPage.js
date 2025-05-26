import { Visibility, VisibilityOff } from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import {
  Box,
  Button,
  createTheme,
  CssBaseline,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

import { useMemo, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import Logo from "../../Images/logo.webp";
import { languages, translations } from "../translations";
import styles from "./style.module.css";
// روابط تسجيل الدخول عبر السوشيال ميديا
const socialLinks = {
  google: "https://accounts.google.com/signin",
  github: "https://github.com/login",
  facebook: "https://www.facebook.com/login",
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [darkMode, setDarkMode] = useState(false);

  // الترجمة حسب اللغة الحالية
  const t = useMemo(() => translations[currentLang.code], [currentLang]);

  // ثيم MUI حسب الوضع الداكن أو الفاتح
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  // فتح قائمة اختيار اللغة
  const handleLangClick = (e) => setAnchorEl(e.currentTarget);

  // إغلاق القائمة وتغيير اللغة عند الاختيار
  const handleLangClose = (code) => {
    setAnchorEl(null);
    if (code) {
      const selected = languages.find((lang) => lang.code === code);
      if (selected) setCurrentLang(selected);
    }
  };

  // تقسيم جملة التسجيل حسب علامة الاستفهام، مع مراعاة اللغة العربية والإنجليزية
  const signupParts = (() => {
    if (t.signup.includes("؟")) {
      const parts = t.signup.split("؟");
      return [parts[0] + "؟", parts[1] ? parts[1].trim() : ""];
    }
    if (t.signup.includes("?")) {
      const parts = t.signup.split("?");
      return [parts[0] + "?", parts[1] ? parts[1].trim() : ""];
    }
    return [t.signup];
  })();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          direction: currentLang.code === "ar" ? "rtl" : "ltr",
        }}
      >
        {/* شريط الأعلى */}

        <Box
          sx={{
            height: 56,
            px: 2,
            bgcolor: "background.paper",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "50px",
            zIndex: 500,
          }}
        >
          {/* الجهة اليمنى: اللوجو */}
          <Box>
            <img
              className={styles.LogoImage}
              src={Logo}
              alt="Logo"
              style={{
                height: 150, // خففته شوية عشان يناسب الشريط
                objectFit: "contain",
              }}
            />
          </Box>

          {/* الجهة اليسرى: اللغة والدارك مود */}
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton
              onClick={() => setDarkMode((prev) => !prev)}
              color="inherit"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Button
              variant="outlined"
              size="small"
              onClick={handleLangClick}
              startIcon={
                <img
                  className={styles.logo}
                  src={currentLang.flag}
                  alt={currentLang.name}
                  style={{
                    width: 50,
                    height: 30,
                    objectFit: "cover",
                    marginInlineEnd: 8, // تضيف مسافة بين الصورة والنص
                  }}
                />
              }
              sx={{ fontWeight: 600 }}
            >
              {currentLang.code.toUpperCase()}
            </Button>
          </Box>

          {/* قائمة اللغة */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleLangClose(null)}
          >
            {languages.map((lang) => (
              <MenuItem
                key={lang.code}
                selected={lang.code === currentLang.code}
                onClick={() => handleLangClose(lang.code)}
              >
                <ListItemIcon>
                  <img src={lang.flag} alt={lang.name} style={{ width: 24 }} />
                </ListItemIcon>
                <ListItemText>{lang.name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* المحتوى الرئيسي */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 420,
              p: 3,
              borderRadius: 2,
              textAlign: "center",
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={1}>
              {t.welcome}
            </Typography>
            <Typography
              style={{ marginBottom: "30px" }}
              variant="body2"
              color="text.secondary"
              mb={2}
            >
              {t.loginMsg}
            </Typography>

            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth
              placeholder={t.username}
              inputProps={{
                style: {
                  textAlign: currentLang.code === "ar" ? "right" : "left",
                },
              }}
            />
            <TextField
              style={{ marginBottom: "20px" }}
              fullWidth
              placeholder={t.password}
              autoComplete="new-password"
              margin="dense"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              inputProps={{
                style: {
                  textAlign: currentLang.code === "ar" ? "right" : "left",
                },
              }}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{
                color: "#fff",
                mt: 2,
                background: "#000",
                fontWeight: "bold",
              }}
            >
              {t.loginBtn}
            </Button>

            <Divider sx={{ my: 2 }}>OR</Divider>

            <Box display="flex" justifyContent="center" gap={2}>
              <IconButton
                onClick={() => window.open(socialLinks.google)}
                color="error"
              >
                <FaGoogle size={20} />
              </IconButton>
              <IconButton onClick={() => window.open(socialLinks.github)}>
                <FaGithub size={20} />
              </IconButton>
              <IconButton
                onClick={() => window.open(socialLinks.facebook)}
                sx={{ color: "#1877f2" }}
              >
                <FaFacebook size={20} />
              </IconButton>
            </Box>

            <Box
              className={styles.HadingTypography}
              mt={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap={3}
              sx={{
                flexDirection: { xs: "column", sm: "row" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Link
                className={styles.FontLink}
                href="#"
                underline="hover"
                sx={{ fontSize: 13 }}
              >
                {t.forgotPassword}
              </Link>

              <Typography
                className={styles.accountLink}
                variant="body2"
                sx={{
                  color: "text.primary",
                  fontSize: 12,
                  mt: { xs: 1, sm: 0 },
                }}
              >
                {signupParts[0]}{" "}
                {signupParts[1] && (
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      color: "primary.main",
                      fontWeight: 500,
                      fontSize: 12,
                    }}
                  >
                    {signupParts[1]}
                  </Link>
                )}
              </Typography>
            </Box>

            <Typography
              variant="caption"
              mt={3}
              display="block"
              color="text.secondary"
            >
              <Link href="/privacy-policy" underline="hover">
                {t.privacyPolicy}
              </Link>{" "}
              | {t.allRights}
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
