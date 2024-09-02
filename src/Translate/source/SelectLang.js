import React from "react";
import { Select, MenuItem, InputLabel} from '@mui/material';
import data from '../../data/data.json';
import '../styles/SelectLang.css';

const SelectLang = ({ lang, label, setLang }) => {
  const handleChange = (event) => {
    setLang(event.target.value);
  }
    return (
        <div className="SelectLang">
  <InputLabel sx={{"font-size": "1.2rem", "margin-bottom": "0.5rem"}}>{label}</InputLabel>
  <Select
    value={lang}
    label={label}
    onChange={handleChange}
    sx={{"padding":"0rem"}}
  >
   {data[(label==="Source Language") ? 'supported-source-languages' : 'supported-target-languages'].map((language) => 
      <MenuItem value={language.code}>{language.name}</MenuItem>)}
  </Select>

  </div>
    )
}
export default SelectLang;