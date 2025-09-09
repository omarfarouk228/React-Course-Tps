import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import DetailsPage from "./pages/DetailsPage";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  // Récupération du thème par défaut dans le localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const changeTheme = (status) => {
    setTheme(status ? "dark" : "light");
    localStorage.setItem("theme", status ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme === "light" ? "App" : "App-dark"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <label class="switch">
          <input
            type="checkbox"
            value={theme}
            onChange={(e) => changeTheme(e.target.checked)}
            checked={theme === "dark"}
          />
          <span class="slider round"></span>
        </label>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
