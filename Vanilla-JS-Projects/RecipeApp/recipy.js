const API_KEY = "62374efcd3b645b098ff339390ec165f";

const baseURL =    `https://api.spoonacular.com/recipes/complexSearch`
console.log(baseURL);

const getRecipes = async () => {
  const fetchData = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apikey=${API_KEY}`
    );
    console.log(fetchData);
  const data = await fetchData.json()
//   console.log(data);
  return data.recipes
};

const init = async () => {
    const recipes = await getRecipes()
    console.log(recipes);
}

// init()