export const isLoggedIn = () => !!localStorage.getItem('token');

export const getUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user') || '{}');
  } catch {
    return {};
  }
};
