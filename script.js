const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("menuOverlay");

// Open
openMenu.addEventListener("click", () => {
	sidebar.classList.add("active");
	overlay.classList.add("active");
});

// Close
closeMenu.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});

// Close when clicking background
overlay.addEventListener("click", () => {
	sidebar.classList.remove("active");
	overlay.classList.remove("active");
});

// Close menu when clicking a link
document.querySelectorAll(".mobile-sidebar a").forEach(link => {
	link.addEventListener("click", () => {
		sidebar.classList.remove("active");
		overlay.classList.remove("active");
	});
});
