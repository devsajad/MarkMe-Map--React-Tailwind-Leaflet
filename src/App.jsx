import FormAddBookmark from "./components/map/addBookmark/FormAddBookmark";
import Categories from "./components/sidebar/main/bookmark/Categories";
import FormAddCategory from "./components/sidebar/main/bookmark/FormAddCategory";
import Place from "./components/sidebar/place/place";
import Places from "./components/sidebar/place/places";
import { BookmarksProvider } from "./context/CategoriesContext";
import { PlacesProvider } from "./context/PlacesContext";
import AppLayout from "./pages/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <PlacesProvider>
      <BookmarksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/categories" element={<Categories />} />
              <Route path="/places/:id" element={<Places />} />
              <Route path="/place" element={<Place />} />
              <Route path="/addCategory" element={<FormAddCategory />} />
              <Route path="/FormAddBookmark" element={<FormAddBookmark />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BookmarksProvider>
    </PlacesProvider>
  );
}

export default App;
