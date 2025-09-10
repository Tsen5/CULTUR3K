export const isValidDate = (date: Date) =>
  date instanceof Date && !isNaN(date.getTime());
