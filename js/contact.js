email = document.getElementById(`email`);
copyButton = document.getElementById(`copyButton`);
copyButton.addEventListener(`click`, copyMail);
function copyMail() {
	navigator.clipboard.writeText(email.innerHTML);
	alert("Email Copied");
}
