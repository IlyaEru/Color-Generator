export const hexToRgb = (hex: string) => {
  let parsedHex = hex;
  if (hex.length < 7) {
    parsedHex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
  }

  const r = parseInt(parsedHex.slice(1, 3), 16);
  const g = parseInt(parsedHex.slice(3, 5), 16);
  const b = parseInt(parsedHex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
};

export const rgbToHex = (rgb: string) => {
  const [r, g, b] = rgb.split(',').map((v) => parseInt(v, 10));

  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};
export const increaseBrightness = (rgb: string) => {
  const [r, g, b] = rgb.split(',').map((num) => parseInt(num, 10));
  const increaseAmountR = (255 - r) / 10;
  const increaseAmountG = (255 - g) / 10;
  const increaseAmountB = (255 - b) / 10;

  const resultArray = [];
  for (let i = 1; i < 11; i++) {
    resultArray.push({
      color: `${r + increaseAmountR * i}, ${g + increaseAmountG * i}, ${
        b + increaseAmountB * i
      }`,
      amount: `${i * 10}%`,
    });
  }
  return resultArray;
};

export const decreaseBrightness = (rgb: string) => {
  const [r, g, b] = rgb.split(',').map((num) => parseInt(num, 10));
  const decreaseAmountR = r / 10;
  const decreaseAmountG = g / 10;
  const decreaseAmountB = b / 10;

  const resultArray = [];
  for (let i = 1; i < 11; i++) {
    resultArray.push({
      color: `${r - decreaseAmountR * i}, ${g - decreaseAmountG * i}, ${
        b - decreaseAmountB * i
      }`,
      amount: `${i * 10}%`,
    });
  }
  return resultArray;
};
