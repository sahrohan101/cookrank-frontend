const API = "https://cookrank-leaderbord.onrender.com"; 

function saveToken(token) {
  localStorage.setItem("token", token);
}
function getToken() {
  return localStorage.getItem("token");
}
function logout() {
  localStorage.removeItem("token");
  window.location = "login.html";
}
function authFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

// Restrict pages if not logged in
function requireAuth() {
  if (!getToken()) window.location = "login.html";
}
