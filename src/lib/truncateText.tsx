export const truncateText = (text: string) => {
  const isTextPlenty = text.length > 50;

  if (isTextPlenty) {
    return <p>{`${text.slice(0, 30)}...`}</p>;
  }

  return <p>{text}</p>;
};
