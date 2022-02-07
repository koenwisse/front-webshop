import "./App.css";
// PAGES
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ShopPage from "./pages/ShopPage";

// PACKAGES
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}
export default App;
