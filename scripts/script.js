// JavaScript Document

const login = () => {
  let loader = document.getElementById("loaderContainer");
  loader.classList.remove("disabled");
  setTimeout(() => {
    loader.classList.add("disabled");
    window.location.href = "index.html";
  }, 2000);
};

const searchInput = () => {
  let searchBackground = document.getElementsByClassName(
    "searchingBackground"
  )[0];
  let searchResults = document.getElementsByClassName("searchResults")[0];
  searchBackground.classList.remove("disabled");
  searchResults.classList.remove("disabled");
};

const searchInputHandler = () => {
  let searchBackground = document.getElementsByClassName(
    "searchingBackground"
  )[0];
  let searchResults = document.getElementsByClassName("searchResults")[0];
  let inputValue = document.getElementsByClassName("searchFieldInput")[0].value;
  let searchResultsList =
    document.getElementsByClassName("searchResultsList")[0];

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
