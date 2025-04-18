let form = document.querySelector("form") as HTMLFormElement;

let username = document.querySelector("#username") as HTMLInputElement;
let email = document.querySelector("#email") as HTMLInputElement;
let password = document.querySelector("#password") as HTMLInputElement;
let rePassword = document.querySelector("#re-password") as HTMLInputElement;

let checkbox = document.querySelector("#checkbox") as HTMLInputElement;


interface IUser {
	username: string;
	email: string;
	password: string
}

let users: object[] = [];

form.addEventListener("submit", (e: Event) => {
	e.preventDefault();
	
	if(password.value === rePassword.value && checkbox.checked) {
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
	else if(password.value !== rePassword.value) {
		alert("Password not matched");
	} 
	else if(!checkbox.checked) {
		alert("Please check the term & condition box");
	}
})

console.log(users);