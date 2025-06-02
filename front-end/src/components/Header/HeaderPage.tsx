import Box from "@mui/material/Box";
import React from "react";
import Logo from "../../assets/logo.webp";
import DarkMod from "../DarkMod/DarkMod";
import TranslationButton from "../Translation/TranslutionButton";
import "../Translation/i18n"; // مسار ملف i18n.js
import styles from "./style.module.css";

const LoginFrom: React.FC = () => {
  return (
    <Box className={styles.Header} sx={{ flexGrow: 1 }}>
      <img className={styles.Logo} src={Logo} alt="Logo" />
      <Box className={styles.DarkLun}>
        <Box sx={{ marginRight: "10px" }}>
          <TranslationButton />
        </Box>
        <Box>
          <DarkMod />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginFrom;
