import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login setUser={setUser} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/todo"
            element={<TodoWrapper loggedIn={loggedIn} user={user} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
