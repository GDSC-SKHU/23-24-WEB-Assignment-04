import React from 'react';

interface InputFieldProps {
  inputValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ inputValue, onInputChange, onAdd }) => {
  return (
    <div className="input-field">
      <input
        type="text"
        placeholder="오늘 할 일은 무엇이 있을까요?"
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="add-button" onClick={onAdd}>추가</button>
    </div>
  );
};

export default InputField;
