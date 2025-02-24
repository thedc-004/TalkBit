import { Route, Routes } from "react-router";
import "./App.css";
import Homepage from "./pages/Homepage";
import HomepageLayout from "./layout/Homepage";
import ExplorePage from "./pages/ExplorePage";
import AllPage from "./pages/AllPage";
import PopularPage from "./pages/PopularPage";

function App() {
  return (
    <Routes>
      <Route element={<HomepageLayout />}>
        <Route index path="/" element={<Homepage />}></Route>
        <Route path="/all" element={<AllPage />}></Route>
        <Route path="/explore" element={<ExplorePage />}></Route>
        <Route path="/popular" element={<PopularPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
