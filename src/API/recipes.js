export const handleSearch = async () => {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/search?query=${recipeQuery}&number=12&apiKey=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};
