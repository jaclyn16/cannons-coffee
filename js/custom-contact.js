let form = document.querySelector("form");
let messageContainer = document.querySelector(".messageContainer");
let contactList = [];

function onFormSubmit() {
	event.preventDefault();
	const data = new FormData(event.target);
    const dataObj = Object.fromEntries(data.entries());
    let name = dataObj.name;
    let email = dataObj.email;
    let phone = dataObj.phone;
    let comments = dataObj.comments;
    let flavor = dataObj.flavor;
    let interest = dataObj.interest;

    let message = `Thank you ${name}! We appreciate your interest in ${interest}, Your favorite coffee flavor is ${flavor} and your comments are ${comments} We will soon contact at ${email} or ${phone}`;
    let messagePara = document.createElement("p");
	messagePara.textContent = message;
	messageContainer.appendChild(messagePara);




contactList.push(dataObj);
	console.log(dataObj);
	form.reset();
}

form.addEventListener("submit", onFormSubmit);

