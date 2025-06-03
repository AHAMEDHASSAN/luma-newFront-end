import { Visibility, VisibilityOff } from "@mui/icons-material";
import type { TextFieldProps } from "@mui/material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../style.module.css";

interface LoginInputsProps {
  langCode: string;
}

const LoginInputs = ({ langCode }: LoginInputsProps) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const commonStyles: TextFieldProps = {
    fullWidth: true,
    variant: "outlined",
    inputProps: {
      style: {
        textAlign: langCode === "ar" ? "right" : "left",
        padding: "12px 14px",
        color: isDarkMode ? "#fff" : "#000", // ✅ نص أبيض في الوضع الداكن
      },
    },
    InputLabelProps: {
      style: {
        textAlign: langCode === "ar" ? "right" : "left",
        width: "100%",
        color: isDarkMode ? "#aaa" : "#555",
      },
    },
    sx: {
      minWidth: 280,
      maxWidth: 400,
      backgroundColor: "transparent", // نعتمد على اللون الداخلي للـ input
      "& .MuiOutlinedInput-root": {
        borderRadius: "6px",
        backgroundColor: isDarkMode ? "#000" : "#fff", // ✅ خلفية الإدخال سوداء في الداكن
        "& fieldset": {
          borderColor: isDarkMode ? "#444" : "#ccc",
        },
        "&:hover fieldset": {
          borderColor: isDarkMode ? "#666" : "#999",
        },
        "& input": {
          color: isDarkMode ? "#fff" : "#000", // ✅ نص أبيض
        },
      },
      "& .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused": {
        color: isDarkMode ? "#aaa" : "#555",
      },
    },
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputGroup}>
        <TextField label={t("username")} {...commonStyles} />
      </div>

      <div className={styles.inputGroup}>
        <TextField
          label={t("password")}
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((p) => !p)}
                  edge="end"
                  sx={{
                    color: isDarkMode ? "#fff" : "#000", // ✅ العين بيضاء في الداكن
                    background: "transparent",
                    "&:hover": {
                      background: "transparent",
                    },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...commonStyles}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "#000",
            color: "#fff",
            borderRadius: "6px",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#222",
            },
          }}
        >
          {t("login")}
        </Button>
      </div>
    </div>
  );
};

export default LoginInputs;
