const btnEl = document.querySelector("button")
const paraEl = document.querySelector("p")

// ================================================
const apiKey = "db6KEWtk3iWplfZiN0c6Uw==kqZOyN2ibzGdHMad"
const options = {
    method: "GET",
    headers: {'X-Api-Key':apiKey,}
}
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
// ====================================================


const getJoke = async () => {
    try {
         const fetchData = await fetch(apiUrl,options)
    const data = await fetchData.json()
    console.log(data[0].joke);
    btnEl.disabled = false
    btnEl.innerHTML = "Tell me a joke"
    paraEl.innerHTML = data[0].joke
    } catch (error) {
        paraEl.innerHTML = "An error"
        btnEl.disabled = true
        btnEl.innerHTML = "Tell me a joke"
    }
   
}


btnEl.addEventListener("click", () => {
    paraEl.innerHTML = "updating..."
    btnEl.disabled = true
    btnEl.innerHTML = "Loading..."
    getJoke()
   
})