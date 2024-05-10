export const truncateText = (text: string) => {
  const isTextPlenty = text.length > 50;

  if (isTextPlenty) {
    return `${text.slice(0, 30)}...`;
  }

  return text;
};
