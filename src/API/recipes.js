const API_KEY = import.meta.env.VITE_API_KEY;

export const handleSearch = async (recipeQuery) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/search?query=${recipeQuery}&number=12&apiKey=${API_KEY}`
  );
  const data = await res.json();
  console.log(data);
  return data.results;
};

export const getRecipesByCuisine = async (cuisine) => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=20&apiKey=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};
