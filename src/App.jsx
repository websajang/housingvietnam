import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RequiredAuth from "./components/RequiredAuth";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/profile"
              element={
                <RequiredAuth>
                  <Profile />
                </RequiredAuth>
              }
            />
            <Route
              path="/create-post"
              element={
                <RequiredAuth>
                  <CreatePost />
                </RequiredAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
