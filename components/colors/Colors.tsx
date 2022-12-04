import React from 'react';
import { StyledColorsContainer } from './Colors.style';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import {
  decreaseBrightness,
  hexToRgb,
  increaseBrightness,
  rgbToHex,
} from '../../utils';
import ColorView from '../colorView/ColorView';

export default function Colors() {
  const selectedColor = useSelector((state: RootState) => state.color);
  const rgb = hexToRgb(selectedColor);
  const brightenedColors = increaseBrightness(rgb).reverse();
  const darkenedColors = decreaseBrightness(rgb);

  return (
    <StyledColorsContainer>
      {brightenedColors.map((color, index) => (
        <ColorView
          key={index}
          color={rgbToHex(color.color)}
          percent={color.amount}
        />
      ))}
      <ColorView color={selectedColor} percent="0%" />
      {darkenedColors.map((color, index) => (
        <ColorView
          key={index}
          color={rgbToHex(color.color)}
          percent={color.amount}
          isDarkened={true}
        />
      ))}
    </StyledColorsContainer>
  );
}
