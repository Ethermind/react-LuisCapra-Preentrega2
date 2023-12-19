import "./App.css";
import ItemDetailView from "./components/ItemListContainer/ItemDetailView";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/items/:categoryId" element={<MainPage />} />
          <Route path="/item/:itemId" element={<ItemDetailView />} />
          <Route path="/not-found" element={<h2>Not found</h2>} />
          <Route path="*" element={<Navigate to={"/not-found"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
