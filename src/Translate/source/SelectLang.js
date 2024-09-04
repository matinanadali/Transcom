import React from "react";
import { Select, MenuItem, InputLabel} from '@mui/material';
import data from '../../data/data.json';
import '../styles/SelectLang.css';

const SelectLang = ({ lang,setLang }) => {
  
  const handleChange = (event) => {
    setLang(event.target.value);
  }

  return (
    <div className="SelectLang">
      
      <InputLabel sx={{"font-size": "1.2rem", "margin-bottom": "0.5rem"}}>Target language:</InputLabel>
      <Select
        value={lang}
        label="Target Language:"
        onChange={handleChange}
        sx={{"padding":"0rem"}}
      >
      {data['supported-target-languages'].map((language) => 
          <MenuItem value={language.code}>{language.name}</MenuItem>)}
      </Select>

    </div>
  )
}
export default SelectLang;