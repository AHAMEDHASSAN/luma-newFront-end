import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import styles from "../../style.module.css";

interface SocialButton {
  icon: React.ReactNode;
  color: string;
  url: string;
  label: string;
}

interface InputField {
  id: string;
  labelKey: string;
  type: string;
}

export default function BasicGrid() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);

  const socialButtons: SocialButton[] = [
    {
      icon: <FaGoogle size={24} />,
      color: "red",
      url: "https://accounts.google.com/signin",
      label: t("loginWithGoogle"),
    },
    {
      icon: <FaGithub size={24} />,
      color: "#000", // أيقونة جيتهاب لونها أسود
      url: "https://github.com/login",
      label: t("loginWithGitHub"),
    },
    {
      icon: <FaFacebook size={24} />,
      color: "#1877f2",
      url: "https://www.facebook.com/login",
      label: t("loginWithFacebook"),
    },
  ];

  const inputFields: InputField[] = [
    { id: "UserName", labelKey: "username", type: "text" },
    { id: "Password", labelKey: "password", type: "password" },
  ];

  return (
    <Box className={styles.TextField}>
      <Typography variant="h4" sx={{ mb: 1, color: "inherit" }}>
        {t("welcomeBack")}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 3, color: "inherit" }}>
        {t("loginMsg")}
      </Typography>

      {inputFields.map(({ id, labelKey, type }) => (
        <Box key={id} className={styles.InputGroup}>
          <label className={styles.Labels} htmlFor={id}>
            {t(labelKey)}
          </label>
          <TextField
            id={id}
            className={styles.Input}
            variant="outlined"
            type={
              id === "Password" ? (showPassword ? "text" : "password") : type
            }
            fullWidth
            autoComplete={id === "Password" ? "new-password" : undefined}
            margin="dense"
            InputProps={
              id === "Password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((prev) => !prev)}
                          edge="end"
                          aria-label={
                            showPassword ? t("hidePassword") : t("showPassword")
                          }
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined
            }
          />
        </Box>
      ))}

      <Box
        className={styles.LoginButton}
        component="button"
        onClick={() => alert(t("loginClicked"))}
      >
        {t("login")}
      </Box>

      <Divider sx={{ width: "100%", maxWidth: 400, mx: "auto" }}>
        {t("or")}
      </Divider>

      <Box mt={2} display="flex" justifyContent="center" gap={2}>
        {socialButtons.map(({ icon, color, url, label }) => {
          // إذا كانت أيقونة جيتهاب، أضف خلفية بيضاء للـ IconButton
          const isGithub = url.includes("github");
          return (
            <IconButton
              key={url}
              aria-label={label}
              onClick={() => window.open(url)}
              sx={{
                color: isGithub ? "#000" : color,
                backgroundColor: isGithub ? "#fff" : "transparent",
                borderRadius: isGithub ? 1 : undefined,
                "&:hover": {
                  backgroundColor: isGithub ? "#f0f0f0" : undefined,
                },
              }}
            >
              {icon}
            </IconButton>
          );
        })}
      </Box>

      <Box className={styles.Links}>
        <Typography variant="body2" color="text.secondary">
          <a
            href="#forgot"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            {t("forgotPassword")}
          </a>
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 14 }}>
          {t("dontHaveAccount")}{" "}
          <a
            href="#signup"
            style={{ color: "#1976d2", textDecoration: "none" }}
          >
            {t("signUp")}
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
