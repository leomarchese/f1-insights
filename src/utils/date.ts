export const formatDate = (dateString: string, time: string) => {
  const date = new Date(`${dateString}T${time}`);

  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};
