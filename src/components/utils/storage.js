const STORAGE_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

export function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function saveUser(newUser) {
  const users = getUsers();
  users.push(newUser);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function userExists(userName) {
  const users = getUsers();
  return users.some((user) => user.userName === userName);
}

export function valideUser(userName, password) {
  const users = getUsers();
  return users.find(
    (user) => user.userName === userName && user.password === password
  );
}

export function loginUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function logoutUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}
