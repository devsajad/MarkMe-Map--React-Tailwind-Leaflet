import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const PlacesContext = createContext();
const BASE_URL = "http://localhost:3000";

const initialState = {
  places: [],
  currentPlace: {},
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "places/loaded":
      return { ...state, isLoading: false, places: action.payload };

    case "place/created":
      return {
        ...state,
        isLoading: false,
        places: [...state.places, action.payload],
        currentPlace: action.payload,
      };

    case "category/deleted":
      return {
        ...state,
        isLoading: false,
        places: state.places.filter((place) => place.id !== action.id),
        currentPlace: {},
      };

    case "rejected":
      return {
        ...state,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function PlacesProvider({ children }) {
  const [{ places, currentPlace, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Funtions
  useEffect(() => {
    const getPlaces = async function () {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/places`);
        const data = await res.json();

        dispatch({ type: "places/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error . Please check you internet connection",
        });
      }
    };
    getPlaces();
  }, []);

  async function addPlace(placeObj) {
    try {
      dispatch({ type: "loading" });

      const response = await fetch(`${BASE_URL}/places`, {
        method: "POST",
        body: JSON.stringify(placeObj),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const newPlace = await response.json();
      dispatch({ type: "place/created", payload: newPlace });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "rejected",
        payload: "There was an error . Please check you internet connection",
      });
    }
  }

  const value = useMemo(
    () => ({
      places,
      currentPlace,
      isLoading,
      error,
      addPlace,
    }),
    [currentPlace, error, isLoading, places]
  );

  return (
    <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
  );
}

function usePlaces() {
  const context = useContext(PlacesContext);
  if (context === undefined)
    throw new Error("Using context outside context provider");

  return context;
}

export { PlacesProvider, usePlaces };
