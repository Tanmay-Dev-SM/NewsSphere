import React from "react";
import { Popper as MUIPopper, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

function Popper({ refEl, content, onClose, ...props }) {
  function handleClose() {
    onClose(false);
  }
  const open = Boolean(refEl);
  const id = open ? "simple-popper" : undefined;
  const header =
    content.header || props.title ? (
      <div className="popper-header">{content.header || props.title}</div>
    ) : null;
  const body = content.body ? (
    <div className="popper-body">{content.body}</div>
  ) : null;
  const footer = content.footer ? (
    <div className="popper-footer">{content.footer}</div>
  ) : null;
  return (
    <MUIPopper
      placement="bottom"
      className="basic-popper"
      id={id}
      open={open}
      anchorEl={refEl}
      transition
      style={{ zIndex: 999, ...props?.style }}
    >
      <IconButton
        className="popper-close"
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      {header}
      {body}
      {footer}
    </MUIPopper>
  );
}

export default Popper;
