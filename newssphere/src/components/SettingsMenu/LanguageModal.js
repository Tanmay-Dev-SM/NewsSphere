import { useState } from 'react';
import { Modal, Radio, RadioGroup, Box, 
Button, FormControl, FormControlLabel, FormLabel, } from '@mui/material';
import SortedLanguageOptions from './LanguageOptions';
import './LanguageModal.css';

function LanguageModal ({ open, onClose }) {

  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };


  return (
    <Modal open={open} onClose={onClose}>
      <Box className='language-modal'>
        <div className='language-modal-body'>
          <h1 style={{ color: '#202124', fontWeight: 'normal' }}>Language & region of interest</h1>
            <FormControl component="fieldset" className='form-control'>
              <FormLabel component="legend" sx={{ paddingBottom: '10px'}}>Select a language:</FormLabel>
               <RadioGroup value={selectedLanguage} onChange={handleLanguageChange}>
                {SortedLanguageOptions.map((language) => (
                <FormControlLabel value={language} control={<Radio />} label={language} />
                ))}
              </RadioGroup>
            </FormControl>
        </div>
        <div className='button-space'>
          <Button variant='text' sx={{ borderRadius: 1, '&:hover': {bgcolor: 'offwhite'} }} onClick={onClose}>
            Cancel</Button>
          <Button variant='contained' sx={{ borderRadius: 7 }} type="submit" >
            Update
          </Button>
        </div>
      </Box>
    </Modal>
  )
}

export default LanguageModal;
