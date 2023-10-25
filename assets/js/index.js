window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("bb-on", "bg-light");
  } else {
    document.getElementById("navbar").classList.remove("bb-on", "bg-light");
  }
});

const addBackground = () => {
  document.getElementById("navbar").classList.add("bb-on", "bg-light");
};
