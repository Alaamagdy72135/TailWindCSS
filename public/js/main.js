document.documentElement.classList.toggle("dark", localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches));

document.getElementById("themeBtn").addEventListener("click", function () {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", localStorage.theme === "dark");
    document.getElementById("themeBtn").textContent = localStorage.theme === "dark" ? "Light Mode" : "Dark Mode";
});
