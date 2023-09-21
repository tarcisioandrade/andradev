export const capitalize = (text: string) => {
  if (text.length === 0) {
    return text;
  }
  const words = text.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(" ");
};
