// JavaScript Document

const login = () => {
	let loader = document.getElementById("loaderContainer");
	loader.classList.remove("disabled");
	setTimeout(() => {
		loader.classList.add("disabled");
		window.location.href = "index.html";
	}, 2000);
};

const searchInput = (close) => {
	let searchBackground = document.getElementsByClassName(
		"searchingBackground"
	)[0];
	let searchResults = document.getElementsByClassName("searchResults")[0];
	searchBackground.classList.remove("disabled");
	searchResults.classList.remove("disabled");

	close &&
		searchResults.classList.add("disabled") +
			searchBackground.classList.add("disabled");
};

const searchInputHandler = () => {
	let searchBackground = document.getElementsByClassName(
		"searchingBackground"
	)[0];
	let searchResults = document.getElementsByClassName("searchResults")[0];
	let inputValue = document.getElementsByClassName("searchFieldInput")[0].value;
	let searchResultsList =
		document.getElementsByClassName("searchResultsList")[0];

		console.log(inputValue)
	if (inputValue !== "") {
		let li = document.createElement("li");
		let span = document.createElement("span");
		let i = document.createElement("i");
		i.className = "fas fa-times";
		span.appendChild(document.createTextNode(inputValue));
		li.appendChild(span);
		li.appendChild(i);
		searchResultsList.appendChild(li);
	}

	searchBackground.classList.add("disabled");
	searchResults.classList.add("disabled");
};

let loginButton = document.getElementsByClassName('loginButton')[0];
loginButton && loginButton.addEventListener("click", login)

let searchFieldInput = document.getElementsByClassName('searchFieldInput')[0];
searchFieldInput && searchFieldInput.addEventListener("click", () => searchInput())

let searchIcon = document.getElementsByClassName('searchIcon')[0];
searchIcon && searchIcon.addEventListener("click", searchInputHandler)

let searchingBackground = document.getElementsByClassName('searchingBackground')[0];
searchingBackground && searchingBackground.addEventListener("click", searchInput(close))