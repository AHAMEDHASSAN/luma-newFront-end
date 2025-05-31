import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../Translation/translations";

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  // تحديد نوع الحدث
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // تحديد نوع كود اللغة
  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem("i18nextLng", code);
    handleClose();
  };

  return (
    <>
      <Button
        id="language-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        size="small"
        onClick={handleClick}
        startIcon={
          <img
            src={currentLang.flag}
            alt={currentLang.name}
            style={{
              width: 24,
              height: 16,
              objectFit: "cover",
              marginInlineEnd: 8,
              borderRadius: "2px",
            }}
          />
        }
      >
        {currentLang.code}
      </Button>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} onClick={() => handleSelect(lang.code)}>
            <img
              src={lang.flag}
              alt={lang.name}
              style={{
                width: 32,
                height: 22,
                marginInlineEnd: 8,
                objectFit: "cover",
                borderRadius: "2px",
                backgroundColor: "#fff",
              }}
            />
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageButton;
