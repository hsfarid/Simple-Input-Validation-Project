//get the html elements
const form = document.querySelector(".js-form-container");
const userName = document.querySelector(".js-username");
const password = document.querySelector(".js-password");
const output = document.querySelector(".js-output");

//create a submit event for validation when the user enters their password
form.addEventListener("submit", (e) => {
  //prevent submit default action
  e.preventDefault();

  if (password.value.length > 12 && password.value.includes(",")) {
    output.innerHTML = `Bravo ${userName.value}! your password is mighty strong.`;
  } else if (password.value.length > 8) {
    output.innerHTML = `Cool ${userName.value}! your password is strong enough.`;
  } else {
    output.innerHTML = `Ooops! ${userName.value}, Enter a valid password.`;
  }

  // password.value = "";
  // userName.value = "";
  form.reset();
});
