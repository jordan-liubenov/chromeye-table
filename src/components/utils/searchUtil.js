export const handleSearch = (e, setFunc) => {
  const { value } = e.target;
  setFunc(value);
};

export const filterUser = (str, users) => {
  let res = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(str.toLowerCase()) ||
      user.lastName.toLowerCase().includes(str.toLowerCase())
  );
  return res;
};
