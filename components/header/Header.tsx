import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { changeColor } from '../../features/colorSlice';
import { StyledHeader, StyledHero, StyledSubmitButton } from './Header.style';

export default function Header() {
  const [inputColor, setInputColor] = useState('');
  const [validInput, setValidInput] = useState(false);

  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.color);

  const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputColor(e.target.value);
    if (!e.target.value.match('^[#]?[0-9A-Fa-f]+$')) {
      setValidInput(false);
      return;
    }

    if (e.target.value.includes('#')) {
      setValidInput(e.target.value.length > 3 && e.target.value.length < 8);
    } else {
      setValidInput(e.target.value.length > 2 && e.target.value.length < 7);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validInput) {
      dispatch(changeColor(inputColor));
      setInputColor('');
      setValidInput(false);
    }
  };

  return (
    <StyledHeader>
      <StyledHero>Color Generator</StyledHero>
      <form onSubmit={handleSubmit}>
        <input
          className={validInput ? 'form__valid-input' : ''}
          onChange={handleColorInput}
          type="text"
          placeholder={color}
        />
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </form>
    </StyledHeader>
  );
}
