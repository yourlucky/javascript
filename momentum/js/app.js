const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(saveUsername) {
  const username = saveUsername;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

localStorage.removeItem("username");
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit", onLoginSubmit);

//paintGreeting(saveUsername);

// const saveUsername = localStorage.getItem("username");
// if (saveUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);

// } else {
//   paintGreeting(saveUsername);
// }

//================================================

// const removeBtn = document.querySelector(".remove_storage");

// function removeStorage() {
//   localStorage.removeItem("username");
//   window.location.reload();
// }

// removeBtn.addEventListener("click", removeStorage);
