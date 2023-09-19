function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})

/*
$(document).ready(function () {
$(".navbar-toggler").click(function () {
	$(".hidden-md-links").toggle();
});
});
*/

const toggleButton = document.querySelector(".navbar-toggler");
const navbarLinks = document.querySelector("#navbarLinks");

toggleButton.addEventListener("click", () => {
	navbarLinks.classList.toggle("collapsed");
});

// Add a function to handle the resizing of the window
function handleWindowResize() {
	if (window.innerWidth >= 768) {
	  navbarLinks.classList.remove("collapsed");
	}
}
  
// Add an event listener for window resize
window.addEventListener("resize", handleWindowResize);

// Initial check for screen width
handleWindowResize();
