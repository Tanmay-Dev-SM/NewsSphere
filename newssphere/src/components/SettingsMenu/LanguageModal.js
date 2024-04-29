import { useState } from "react";
import {
  Modal,
  Radio,
  RadioGroup,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  updateSearchStore,
  resetSearchStore,
} from "src/reducers/search/search";

//OUR COMPONENTS
import SortedLanguageOptions from "./LanguageOptions";
import "./LanguageModal.css";
import PrimaryButton from "src/components/Buttons/PrimaryButton";
import SecondaryButton from "src/components/Buttons/SecondaryButton";

function LanguageModal({ open, onClose }) {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    search?.dest_lang || "en"
  );

  // let { languages } = i18n(search?.dest_lang || "en");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const updateLanguageOption = (event) => {
    dispatch(updateSearchStore({ ...search, dest_lang: selectedLanguage }));
    i18n.changeLanguage(selectedLanguage);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="language-modal">
        <div className="language-modal-body">
          <h1 style={{ color: "#202124", fontWeight: "normal" }}>
            {t("langOptHeader")}
          </h1>
          <FormControl component="fieldset" className="form-control">
            <FormLabel component="legend" sx={{ paddingBottom: "10px" }}>
              {t("selectLang")}:
            </FormLabel>
            <RadioGroup
              value={selectedLanguage}
              onChange={handleLanguageChange}
              sx={{ fontSize: 10 }}
            >
              {t("languages")
                ?.sort()
                ?.map((language) => (
                  <FormControlLabel
                    value={language?.value}
                    label={language?.label}
                    control={<Radio />}
                  />
                ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="button-space">
          <SecondaryButton
            title={t("cancelButton")}
            variant="text"
            customHeight="32px"
            customWidth="96px"
            borderRadius="16px"
            onClick={onClose}
          />
          <PrimaryButton
            title={t("updateButton")}
            customHeight="32px"
            customWidth="96px"
            borderRadius="16px"
            onClick={updateLanguageOption}
          />
        </div>
      </Box>
    </Modal>
  );
}

export default LanguageModal;
