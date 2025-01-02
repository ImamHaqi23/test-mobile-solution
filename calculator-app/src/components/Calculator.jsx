import { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (label === 'C') {
      setInput('');
    } else {
      setInput(input + label);
    }
  };
  return (
    <div className="w-96 bg-white p-4 rounded-lg shadow-lg">
      <Display value={input} />
      <div className="grid grid-cols-4 gap-2 mt-4">
        <Button label="7" onClick={handleButtonClick} />
        <Button label="8" onClick={handleButtonClick} />
        <Button label="9" onClick={handleButtonClick} />
        <Button label="/" onClick={handleButtonClick} />
        <Button label="4" onClick={handleButtonClick} />
        <Button label="5" onClick={handleButtonClick} />
        <Button label="6" onClick={handleButtonClick} />
        <Button label="*" onClick={handleButtonClick} />
        <Button label="1" onClick={handleButtonClick} />
        <Button label="2" onClick={handleButtonClick} />
        <Button label="3" onClick={handleButtonClick} />
        <Button label="-" onClick={handleButtonClick} />
        <Button label="0" onClick={handleButtonClick} />
        <Button
          label="C"
          onClick={handleButtonClick}
          className="bg-red-500 text-white hover:bg-red-600"
        />
        <Button label="." onClick={handleButtonClick} />
        <Button label="+" onClick={handleButtonClick} />
        <Button
          label="="
          onClick={handleButtonClick}
          className="bg-green-500 text-white hover:bg-green-600"
        />
      </div>
    </div>
  );
};

export default Calculator;
