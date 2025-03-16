import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const CategoriesContext = createContext();
const BASE_URL = "http://localhost:3000";

const initialState = {
  categories: [],
  currentCategory: {},
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "categories/loaded":
      return { ...state, isLoading: false, categories: action.payload };

    case "category/loaded":
      return { ...state, isLoading: false, currentCategory: action.payload };

    case "category/created":
      return {
        ...state,
        isLoading: false,
        categories: [...state.categories, action.payload],
        currentCategory: action.payload,
      };

    case "category/deleted":
      return {
        ...state,
        isLoading: false,
        categories: state.categories.filter((cat) => cat.id !== action.id),
        currentCategory: {},
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

function BookmarksProvider({ children }) {
  const [{ categories, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Funtions
  useEffect(() => {
    const getCategories = async function () {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/categories`);
        const data = await res.json();

        dispatch({ type: "categories/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error . Please check you internet connection",
        });
      }
    };
    getCategories();
  }, []);

  
  async function addCategory(categoryName) {
    try {
      dispatch({ type: "loading" });

      const response = await fetch(`${BASE_URL}/categories`, {
        method: "POST",
        body: JSON.stringify({ name: categoryName }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const newCategory = await response.json();
      dispatch({ type: "category/created", payload: newCategory });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "rejected",
        payload: "There was an error . Please check you internet connection",
      });
    }
  }

  const getCategory = useCallback(async function (categoryId) {
    try {
      dispatch({ type: "loading" });

      const response = await fetch(`${BASE_URL}/categories/${categoryId}`);
      if (!response.ok) throw new Error("Failed to fetch category");

      const category = await response.json();
      dispatch({ type: "category/loaded", payload: category });

      return category;
    } catch {
      dispatch({ type: "rejected", payload: "Error fetching category" });
      return null;
    }
  }, []);

  const value = useMemo(
    () => ({
      categories,
      isLoading,
      error,
      addCategory,
      getCategory,
    }),
    [categories, isLoading, error, getCategory]
  );

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}

function useCategories() {
  const context = useContext(CategoriesContext);
  if (context === undefined)
    throw new Error("Using context outside context provider");

  return context;
}

export { BookmarksProvider, useCategories };
