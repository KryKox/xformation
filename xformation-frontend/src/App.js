import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavigationMenu from "./components/Navigation/NavigationMenu";

function App() {
  return (
    <div className="App">
        <NavigationMenu />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
