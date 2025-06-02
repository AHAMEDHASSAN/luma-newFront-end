import { Box, Divider, IconButton, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const socials = [
  {
    icon: <FaGoogle size={18} />,
    url: "https://accounts.google.com/signin",
    color: "#DB4437",
    hover: "#DB4437",
    key: "loginWithGoogle",
  },
  {
    icon: <FaGithub size={18} />,
    url: "https://github.com/login",
    color: "#000",
    hover: "#000",
    key: "loginWithGitHub",
  },
  {
    icon: <FaFacebook size={18} />,
    url: "https://www.facebook.com/login",
    color: "#1877f2",
    hover: "#1877f2",
    key: "loginWithFacebook",
  },
];

const LoginSocial = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", width: "100%" }}>
      <Divider sx={{ my: 2 }}>{t("or")}</Divider>

      <Box display="flex" justifyContent="center" gap={2} mt={2}>
        {socials.map(({ icon, url, color, hover, key }, i) => (
          <IconButton
            key={i}
            onClick={() => window.open(url)}
            sx={{
              bgcolor: "#fff",
              border: "1px solid #ddd",
              color,
              "&:hover": { bgcolor: hover, color: "#fff" },
            }}
            aria-label={t(key)}
          >
            {icon}
          </IconButton>
        ))}
      </Box>

      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
        textAlign={{ xs: "center", sm: "left" }}
        gap={2}
        fontSize={15}
      >
        <Link
          sx={{ fontFamily: "Helvetica, Arial, sans-serif" }}
          href="#"
          underline="hover"
        >
          {t("forgotPassword")}
        </Link>
        <Typography
          fontSize={14}
          sx={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          {t("dontHaveAccount")}
          <Link href="#" underline="hover" sx={{ ml: 0.5 }}>
            {t("signUp")}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginSocial;
