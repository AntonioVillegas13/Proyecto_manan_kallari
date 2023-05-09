import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import {
  CreateVariable,
  Error404,
  Login,
  Navbar,
  PathDisplay,
  Planograma,
  CreateExhibidor,
  RegisterExhibidor,
  TestPage,
} from "./imports";
import { useState } from "react";

function App() {
  const [sessionUser, setSessionUser] = useState({ name: "John Doe" });

  return (
    <Router>
      {sessionUser ? (
        <div>
          <Navbar sessionUser={sessionUser} setSessionUser={setSessionUser} />
         
          <Routes>
            <Route path="/" element={<Navigate to={"/variables/crear"} />} />
            <Route path="/acceder" element={<Navigate to={"/"} />} />
            <Route path="/test" element={<TestPage />} />
            <Route
              path="/variables/portafolio"
              element={<Navigate to={"/test"} />}
            />
            <Route path="/variables/crear" element={<CreateVariable />} />
            <Route path="/exhibidores/planograma" element={<Planograma />} />
            <Route path="/exhibidores/crear" element={<CreateExhibidor />} />
            <Route
              path="/exhibidores/registar"
              element={<RegisterExhibidor />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      ) : (
        <Login setUserSession={setSessionUser} />
      )}
    </Router>
  );
}

export default App;
