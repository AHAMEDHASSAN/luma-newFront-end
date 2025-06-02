import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const LoginHeader: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation(); // ← هنا الترجمة

  return (
    <Box textAlign="center">
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ color: theme.palette.mode }}
      >
        {t("welcome")}
      </Typography>
      <Typography variant="body2" sx={{ color: theme.palette.mode, mt: 1 }}>
        {t("loginMsg")}
      </Typography>
    </Box>
  );
};

export default LoginHeader;
