import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
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
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      getData: async () => {
        const URL =
          "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";
        const options = {
          params: {
            bl_latitude: "27.847676",
            bl_longitude: "96.473209",
            tr_longitude: "130.149359",
            tr_latitude: "18.838442",
            currency: "USD",
          },
          headers: {
            "X-RapidAPI-Key":
              "3149835cafmsh2a04639bc2ffd55p152938jsna9deae1c69fd",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        };

        try {
          const response = await axios.get(URL, options);
          console.log(response.data.data);
          setStore({ hotels: response.data.data });
        } catch (error) {
          console.log(error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
