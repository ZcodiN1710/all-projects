const containerEl = document.querySelector(".mouseContainer");

window.addEventListener("mousemove", (eo) => {
  console.log(eo);
  containerEl.innerHTML = ` 
    <div class="mouseX">
    <p>mouse X position(px)</p>
    <p class="num">${eo.screenX}</p>
    </div>
    <div class="mouseY">
    <p>mouse Y position(px)</p>
    <p class="num">${eo.screenY}</p>
    </div>
`;
});
