export const getToken = () => {
  try {
    return window.localStorage.getItem("token");
  } catch (err) {
    return undefined;
  }
};
