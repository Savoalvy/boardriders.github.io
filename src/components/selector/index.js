import React, { useState } from 'react';
import '../../styles/variables.scss';
import Text from '../../config/text';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="options">{Text.header.firstLayer.location} </label>
      <select id="options" value={selectedOption} onChange={handleChange}>
        <option value="option1">{Text.header.selector.brest}</option>
        <option value="option2">{Text.header.selector.minsk}</option>
        <option value="option3">{Text.header.selector.grodno}</option>
        <option value="option4">{Text.header.selector.mogilev}</option>
        <option value="option5">{Text.header.selector.vitebsk}</option>
        <option value="option6">{Text.header.selector.gomel}</option>
      </select>
    </div>
  );
};

export default Dropdown;
