const inputText = document.getElementById("inputText");
const searchBtn = document.querySelector(".searchBtn");
const imagesContainer = document.querySelector(".imagesContainer");
const showMoreBtn = document.querySelector(".showMoreBtn");
const imgLine = document.querySelector(".imgLine");

const keyapi = "hLMXsH_SsHtDkC72x3r8YcPjer1W1JLCsWOkRnzCTg8";

// let inputValue =inputText.value;
let page = 1;

const getImage = async () => {
  inputValue = inputText.value;
  const url = `http://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${keyapi}`;
  try {
    const fetchData = await fetch(url);
    if (!fetchData.ok) {
      throw new Error("Network there is an error");
    }
    const data = await fetchData.json();
    console.log(data);
    if (page===1) {
        imagesContainer.innerHTML = ""
      }
      const results = data.results
    
 
      console.log(results);

      results.map((result) => {
        // const imgWrapper = document.createElement("div")
        // imgWrapper.classList.add("image")
        // const img = document.createElement("img")
        // img.src = result.urls.small
        // img.alt = result.alt_description
        // const link = document.createElement("a")
        // link.href = result.links.html
        // link.target = "_blank"
        // link.textContent = result.alt_description
        // imgWrapper.appendChild(img)
        // imgWrapper.appendChild(link)
        // imagesContainer.append(imgWrapper)

        const imageSrc = result.urls.small
        const imageAlt = result.alt_description
        const imageHref = result.links.html
        console.log(imageHref);
        let imgResult =`
        <div class="image">
        <img src="${imageSrc}"alt="${imageAlt}"/>
        <a href="${imageHref}" target="_blank">${imageAlt}</a>
        </div>`
         imagesContainer.innerHTML+=imgResult
      })

      if (page>0) {
        showMoreBtn.style.display = "block"
      }
  } catch (error) {}
};

searchBtn.addEventListener("click", () => {
    page =1
  getImage();
});
showMoreBtn.addEventListener("click", () => {
    page++
  getImage();
});
