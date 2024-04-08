import { useState } from "react";
import {
  Modal,
  Radio,
  RadioGroup,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import SortedLanguageOptions from "./LanguageOptions";
import "./LanguageModal.css";
import PrimaryButton from "src/components/Buttons/PrimaryButton";
import SecondaryButton from "src/components/Buttons/SecondaryButton";

function LanguageModal({ open, onClose }) {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="language-modal">
        <div className="language-modal-body">
          <h1 style={{ color: "#202124", fontWeight: "normal" }}>
            Language & region of interest
          </h1>
          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend" sx={{ paddingBottom: "10px" }}>
              Select a language:
            </FormLabel>
            <RadioGroup
              value={selectedLanguage}
              onChange={handleLanguageChange}
              sx={{ fontSize: 10 }}
            >
              {SortedLanguageOptions?.map((language) => (
                <FormControlLabel
                  value={language}
                  label={language}
                  control={<Radio />}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="button-space">
          <SecondaryButton
            title="Cancel"
            variant="text"
            customHeight="32px"
            customWidth="96px"
            borderRadius="16px"
            onClick={onClose}
          />
          <PrimaryButton
            title="Update"
            customHeight="32px"
            customWidth="96px"
            borderRadius="16px"
            // onClick={handleLanguageUpdate}
          />
        </div>
      </Box>
    </Modal>
  );
}

export default LanguageModal;
