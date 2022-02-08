import "./App.css";
// PAGES
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import ShopPage from "./pages/ShopPage";
// COMPONENTS
import NavBar from "./components/NavBar";

// PACKAGES
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop/:id" element={<DetailsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}
export default App;
