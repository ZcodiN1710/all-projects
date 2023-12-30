const iconStarFull = document.querySelectorAll(".icon-star-full");
const emojisContainer = document.querySelector(".emojisContainer");
const starsContainer = document.querySelector(".starsContainer");



iconStarFull.forEach((star, index) => {
  star.addEventListener("click", (eo) => {
    updaterating(index);
    if (eo.target.id == "star1") {
      emojisContainer.innerHTML = `<i class="icon-angry"></i>`;
    } else if (eo.target.id == "star2") {
      emojisContainer.innerHTML = `<i class="icon-sad"></i>`;
    } else if (eo.target.id == "star3") {
      emojisContainer.innerHTML = `<i class="icon-neutral"></i>`;
    } else if (eo.target.id == "star4") {
      emojisContainer.innerHTML = `<i class="icon-smile"></i>`;
    } else if (eo.target.id == "star5") {
      emojisContainer.innerHTML = `<i class="icon-happy"></i>`;
    }
  });
});

const updaterating = (num) => {
  iconStarFull.forEach((star, indx) => {
    if (indx < num + 1) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
};








