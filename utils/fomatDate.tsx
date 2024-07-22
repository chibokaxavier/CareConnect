export const formateDate = (date: string, config: any) => {
  const defaultOptions = { day: "numeric", month: "long", year: "numeric" };
  const options = config ? config : defaultOptions;
  return new Date(date).toLocaleDateString("en-us", options);
};
