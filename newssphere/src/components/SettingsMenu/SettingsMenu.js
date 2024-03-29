import { useState } from "react";
import { Menu, MenuItem, IconButton } from '@mui/material';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import LanguageModal from "./LanguageModal";

const SettingsMenu = () => {
  const [anchorSettings, setAnchorSettings] = useState (null);
  const [open, setOpen] = useState (false);
  const handleClose = () => {
    setAnchorSettings (null);
    setOpen (false);
  }
  const handleClick = (e) => {
    setAnchorSettings(e.currentTarget);
    setOpen(true);
  };
  const [isLanguageModalOpen, setLanguageModalOpen] = useState(false);
  const handleLanguageModalOpen = () => {
    setLanguageModalOpen(true);
    handleClose();
  }
  
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
      
      <Menu anchorEl={anchorSettings} open={open} onClose={handleClose} >
        <MenuItem onClick={handleClose} sx = {{ fontSize: "13px" }} >Settings</MenuItem>
        <MenuItem onClick={ handleLanguageModalOpen} sx = {{ fontSize: "13px" }} >Language & Region</MenuItem>
      </Menu>
      
      <LanguageModal open={isLanguageModalOpen} onClose={() => setLanguageModalOpen(false)} />
    </div>
  )
}

export default SettingsMenu;

