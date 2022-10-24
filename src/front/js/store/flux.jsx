const getState = ({ getStore, getActions, setStore }) => {
	const urlHoteles =
	  "https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=venezuela&currency=USD&locale=en_US";
	return {
	  store: {
		message: null,
		demo: [
		  {
			title: "FIRST",
			background: "white",
			initial: "white",
		  },
		  {
			title: "SECOND",
			background: "white",
			initial: "white",
		  },
		],
		favorites: [],
		hoteles: [],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
		getHoteles: async () => {
  
		  const options = {
			  method: "GET",
			  headers: {
			  "X-RapidAPI-Key": "5695473c26mshb8d6f1e8df79a74p1667bajsn8467602b42e0",
			  "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
			  },
			};
  
		  const url =
			"https://hotels-com-provider.p.rapidapi.com/v1/destinations/search?query=venezuela&currency=USD&locale=en_US";
		  const respuesta = await fetch(url, options);
		  const resultado = await respuesta.json();
		  setStore({ hoteles: resultado.suggestions });
  
		  console.log(resultado.suggestions);
		},
  
		isIn: (favorites, group) => {
		  let isIn = false;
		  for (let favorite of favorites) {
			if (favorite.group === group) {
			  isIn = true;
			}
		  }
		  return isIn;
		},
  
		manageFavorites: (group) => {
		  const store = getStore();
		  let oldFavorites = [...store.favorites];
		  let isIn = getActions().isIn(oldFavorites, group);
		  let newFavorites;
  
		  if (isIn) {
			newFavorites = oldFavorites.filter(
			  (favorites) => favorites.group !== group
			);
		  } else {
			newFavorites = [...store.favorites, { group: group }];
		  }
		  localStorage.setItem("favorites", JSON.stringify(newFavorites));
		  setStore({ favorites: newFavorites });
		},
  
		getMessage: async () => {
		  
		},
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const favorites = store.favorites.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ favorites: favorites });
		},
	  },
	};
  };
  
  export default getState;
  