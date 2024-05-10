const MAX_STRING_LENGTH_TO_BE_SHOWN = 50

export const truncateText = (text: string) => {
  const isTextPlenty = text.length > MAX_STRING_LENGTH_TO_BE_SHOWN;

  if (isTextPlenty) {
    return `${text.slice(0, MAX_STRING_LENGTH_TO_BE_SHOWN)}...`;
  }

  return text;
};
