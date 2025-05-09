const images = document.getElementsByClassName("galleryImage");
const scrollDownIcon = document.getElementById("down");
const scrollUpIcon = document.getElementById("up");

window.addEventListener(
  "scroll",
  () => {
    const scrollTotal =
      (window.pageYOffset * images.length) /
      (document.body.offsetHeight - window.innerHeight);
    const currentIndex = parseInt(scrollTotal);
    const currentScroll = scrollTotal - currentIndex;
    if (currentIndex < images.length) {
      setScroll(images[currentIndex], currentScroll);
    }

    //Fix for fast scrolling
    for (var i = 0; i < images.length; i++) {
      if (i != currentIndex) {
        const scrollFix = i < currentIndex ? 100 : 0;
        images[i].style.setProperty("--scroll", scrollFix);
      }
    }

    if (currentIndex < images.length) {
      scrollDownIcon.style.opacity = "1";
    } else {
      scrollDownIcon.style.opacity = "0";
    }
    if (currentIndex > 0) {
      scrollUpIcon.style.opacity = "1";
    } else {
      scrollUpIcon.style.opacity = "0";
    }
  },
  false
);

function setScroll(element, scroll) {
  element.style.setProperty("--scroll", scroll);
}