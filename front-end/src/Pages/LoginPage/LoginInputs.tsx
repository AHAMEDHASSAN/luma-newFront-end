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
        color: isDarkMode ? "#fff" : "inherit",
      },
    },
    InputLabelProps: {
      style: {
        textAlign: langCode === "ar" ? "right" : "left",
        width: "100%",
        color: isDarkMode ? "#fff" : "inherit",
      },
    },
    sx: {
      minWidth: 280,
      maxWidth: 400,
      "& .MuiOutlinedInput-root": {
        borderRadius: "4px",
        "& fieldset": { borderColor: isDarkMode ? "#555" : "#ddd" },
        "&:hover fieldset": { borderColor: isDarkMode ? "#888" : "#aaa" },
        color: isDarkMode ? "#fff" : "inherit",
      },
      "& .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused": {
        color: isDarkMode ? "#fff" : "inherit",
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
                    background: isDarkMode ? "#333" : "white",
                    color: isDarkMode ? "#fff" : "inherit",
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            style: { color: isDarkMode ? "#fff" : "inherit" },
          }}
          {...commonStyles}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: isDarkMode ? "#fff" : "#000",
            color: isDarkMode ? "#000" : "#fff",
            border: "1px solid #fff",
          }}
        >
          {t("login")}
        </Button>
      </div>
    </div>
  );
};

export default LoginInputs;
