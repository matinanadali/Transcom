import React from "react";
import { Select, MenuItem, InputLabel} from '@mui/material';
import data from '../../data/data.json';
import '../styles/SelectLang.css';

const SelectLang = ({ lang,setLang }) => {
  
  const handleChange = (event) => {
    setLang(event.target.value);
  }

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 7.5,  // Adjust the numbers to control max height
        width: 250,
      },
    },
    // Optional: disable auto focus on the selected item
    MenuListProps: {
      autoFocusItem: false,
    },
  };

  return (
    <div className="SelectLang">
      
      <InputLabel sx={{"font-size": "1.2rem", "margin-bottom": "0.5rem"}}>Target language:</InputLabel>
      <Select
        value={lang}
        label="Target Language:"
        onChange={handleChange}
        sx={{"padding":"0rem"}}
        MenuProps={MenuProps}
      >
      {data['supported-target-languages'].map((language) => 
          <MenuItem value={language.code}>{language.name}</MenuItem>)}
      </Select>

    </div>
  )
}
export default SelectLang;