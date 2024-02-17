export const getCocktail = (drink) => {
  return fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
  ).then((response) => response.json());
};

export const getCocktailDetails = (id) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(
    (res) => {
      if (!res.ok) {
        throw new Error('Something went wrong, try refreshing the page.');
      }
      return res.json();
    }
  );
};
