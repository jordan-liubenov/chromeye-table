export const handleSearch = (e, setFunc) => {
  const { value } = e.target;
  setFunc(value);
};
