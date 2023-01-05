//select search bar
let searchBar = document.querySelector(".search-bar"),
search = document.querySelector(".search");
searchBar.onclick = function() {
    search.classList.toggle("active");
}
// select toggle bar
let toggleBar = document.querySelector(".toggle-bar"),
navlinks = document.querySelector(".navlinks");
toggleBar.onclick = function() {
    navlinks.classList.toggle("active");
}