"use strict";
let form = document.querySelector("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let rePassword = document.querySelector("#re-password");
let checkbox = document.querySelector("#checkbox");
let users = [];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (password.value === rePassword.value && checkbox.checked) {
        users.push({
            username: username.value,
            email: email.value,
            password: password.value
        });
        username.value = "";
        email.value = "";
        password.value = "";
        rePassword.value = "";
    }
    else if (password.value !== rePassword.value) {
        alert("Password not matched");
    }
    else if (!checkbox.checked) {
        alert("Please check the term & condition box");
    }
});
console.log(users);
