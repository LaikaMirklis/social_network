export const required = (value) => {
  if (value) return undefined;
  return 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength)
    return `Max length is ${maxLength} symbols`;
  // 1 symbols??
  return undefined;
};

// зробити ф-цію яка одночасно буде і за мін і за макс ленг відповідати, типу ф-ція, межі дозволеного Length діапазон
// minmaxlength (min, max)
// локалізація для тексту помилок
