const buttonEl = document.querySelector("button");
const feedbackUIContainerEl = document.querySelector(".feedbackUIContainer");
const reviewSentEl = document.querySelector(".reviewSent");
const reviewSentElSpan = document.querySelector(".reviewSent span");
console.log(reviewSentElSpan);
const paraContainers = document.querySelectorAll(".paraContainer");
// const paraContainers = document.querySelectorAll(".paraContainer");

paraContainers.forEach((paraContainer) => {
  paraContainer.addEventListener("click", () => {
    console.log(paraContainer.getElementsByTagName("p")[0].textContent);
    removeActive();
    paraContainer.classList.add("active");
    reviewSentElSpan.innerHTML =
      paraContainer.getElementsByTagName("p")[0].innerText;
  });
});

const removeActive = () => {
  paraContainers.forEach((paraContainer) => {
    paraContainer.classList.remove("active");
  });
};

const updateRating = () => {
  paraContainers.forEach((paraContainer) => {
    if (paraContainer.classList.contains("active")) {
      feedbackUIContainerEl.style.display = "none";
      reviewSentEl.style.display = "block";
      console.log("active");
    } else {
    
    }
  });
};

buttonEl.addEventListener("click", updateRating)
