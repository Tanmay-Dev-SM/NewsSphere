import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";

const menuOptions = [
  {
    value: 0,
    label: "View Profile",
  },
  {
    value: 1,
    label: "Logout",
  },
];
const loginMenuOptions = [{ value: 0, label: "Login" }];
const ProfileMenu = () => {
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
        className="optionsIcon"
        onClick={handleClick}
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        //onClick={handleProfileMenuOpen}
      >
        <AccountCircle />
      </IconButton>

      <Menu anchorEl={anchorSettings} open={open} onClose={handleClose}>
        {loginMenuOptions?.map((option) => (
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
    </div>
  );
};

export default ProfileMenu;
