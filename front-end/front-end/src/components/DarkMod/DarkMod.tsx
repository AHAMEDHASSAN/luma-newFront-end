// DarkMod.tsx
import { Brightness4, Brightness7 } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useDarkMode } from "./DarkModeContext";

const DarkMod = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Tooltip title={darkMode ? "Light Mode" : "Dark Mode"}>
      <IconButton
        onClick={toggleDarkMode}
        color="inherit"
        aria-label="toggle dark mode"
        sx={{
          backgroundColor: darkMode ? "#333" : "#eee",
          color: darkMode ? "#fff" : "#000",
          "&:hover": {
            backgroundColor: darkMode ? "#555" : "#ccc",
          },
        }}
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default DarkMod;
