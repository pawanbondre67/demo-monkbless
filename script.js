window.addEventListener("scroll", function() {
  var header = document.querySelector("#banner");
  const threshold = 50;

    if (window.scrollY > threshold) {
        header.classList.add("scrolled");
        }
    else {
        header.classList.remove("scrolled");
        }

}   
);