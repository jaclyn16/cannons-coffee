let form = document.querySelector("form");
let messageContainer = document.querySelector(".messageContainer");
let loginList = [];

function onFormSubmit() {
	event.preventDefault();
	const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data.entries());
    let name = dataObj.name;
    let email = dataObj.email;
    let password = dataObj.password;
    let message = `Welcome, ${name}! You are logged in!`;
    let messagePara = document.createElement("p");
	messagePara.textContent = message;
	messageContainer.appendChild(messagePara);


	loginList.push(dataObj);
	console.log(dataObj);
	form.reset();
}

form.addEventListener("submit", onFormSubmit);

