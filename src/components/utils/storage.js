const STORAGE_KEY = "users";

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
