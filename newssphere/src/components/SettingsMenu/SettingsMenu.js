import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import LanguageModal from "./LanguageModal";

const menuOptions = [
  {
    value: 0,
    label: "Settings",
  },
  {
    value: 1,
    label: "Language & Region",
  },
];
const SettingsMenu = () => {
  const [anchorSettings, setAnchorSettings] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setAnchorSettings(null);
    setOpen(false);
  };
  const handleClick = (e) => {
    setAnchorSettings(e.currentTarget);
    setOpen(true);
  };
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);
  const handleLanguageModalOpen = () => {
    setLanguageModalOpen(true);
    handleClose();
  };

  const handleSettings = (setting) => {
    switch (setting) {
      case 0:
        handleClose();
        break;
      case 1:
        handleLanguageModalOpen();
        break;
      default:
        handleClose();
        break;
    }
  };

  return (
    <div>
      <IconButton
        variant="contained"
        onClick={handleClick}
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        // color="inherit"
      >
        <SettingsOutlined />
      </IconButton>

      <Menu anchorEl={anchorSettings} open={open} onClose={handleClose}>
        {menuOptions?.map((option) => (
          <MenuItem
            sx={{ fontSize: "13px" }}
            onClick={() => {
              handleSettings(option.value);
            }}
          >
            {option.label}
          </MenuItem>
        ))}
        {/* <MenuItem onClick={handleLanguageModalOpen} sx={{ fontSize: "13px" }}>
          Language & Region
        </MenuItem> */}
      </Menu>

      <LanguageModal
        open={isLanguageModalOpen}
        onClose={() => setLanguageModalOpen(false)}
      />
    </div>
  );
};

export default SettingsMenu;
