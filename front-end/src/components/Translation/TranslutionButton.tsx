import { Button, Menu, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../Translation/translations";
const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];
  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
      <Button
        id="language-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        size="small"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        startIcon={
          <img
            src={currentLang.flag}
            alt={currentLang.name}
            style={{
              width: 48,
              height: 33,
              marginInlineEnd: 8,
              borderRadius: 2,
              objectFit: "cover",
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
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ "aria-labelledby": "language-button" }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => {
              i18n.changeLanguage(lang.code);
              localStorage.setItem("i18nextLng", lang.code);
              setAnchorEl(null);
            }}
          >
            <img
              src={lang.flag}
              alt={lang.name}
              style={{
                width: 32,
                height: 22,
                marginInlineEnd: 8,
                borderRadius: 2,
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
