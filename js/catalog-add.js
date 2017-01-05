
var writeUs = document.querySelector(".write-us");
var buy = document.querySelector(".buy");

buy.addEventListener("click", function(event) {
	event.preventDefault();
	writeUs.classList.add("display-block");
});