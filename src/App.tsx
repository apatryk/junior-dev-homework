import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import { DirectoryScreen } from "./app/DirectoryScreen";

function App() {
  return (
    <Routes>
      <Route path={`/:id/*`} element={<DirectoryScreen />}>
        <Route path={`:id/*`} element={<DirectoryScreen />}>
          <Route path={`:id/*`} element={<DirectoryScreen />} />
        </Route>
      </Route>
      <Route path="/" element={<Navigate to="/0" />} />
    </Routes>
  );
}
export default App;
