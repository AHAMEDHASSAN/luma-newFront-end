// Footer.tsx (أو اسم ملف الفوتر عندك)
import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../components/DarkMod/DarkModeContext";
import styles from "./style.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const { darkMode } = useDarkMode();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        textAlign: "center",
      }}
      className={styles.Footer}
    >
      <Typography variant="caption">
        <Link
          href="/privacy-policy"
          underline="hover"
          sx={{ color: darkMode ? "#83d5fb" : "#1976d2", fontWeight: 500 }}
        >
          {t("privacyPolicyLabel")}
        </Link>{" "}
        {t("allRightsReserved")}
      </Typography>
    </Box>
  );
}
