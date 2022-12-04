import classNames from 'classnames';
import React, { useState } from 'react';
import { rgbToHex } from '../../utils';
import { StyledColorView } from './ColorView.style';

interface ColorViewProps {
  color: string;
  percent: string;
  isDarkened?: boolean;
}

export default function ColorView({
  color,
  percent,
  isDarkened,
}: ColorViewProps) {
  const [isCopied, setIsCopied] = useState(false);

  const colorViewClassNames = classNames({
    'colors__color--dark': isDarkened,
  });

  const handleColorCopy = (color: string) => {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  return (
    <StyledColorView
      className={colorViewClassNames}
      $bgColor={color}
      onClick={() => handleColorCopy(color)}
    >
      <span className="colors__color--percent-value">{percent}</span>
      <span className="colors__color--color-value">{color}</span>
      {isCopied && <span className="colors__color--copied">Copied!</span>}
    </StyledColorView>
  );
}
