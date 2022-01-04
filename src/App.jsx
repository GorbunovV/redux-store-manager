import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, NavLink } from "react-router-dom";

import * as app from "./reducers/app";

import First from "./components/First";
import Second from "./components/Second";

const AppRaw = () => {
  const dispatch = useDispatch();
  const appStatus = useSelector(app.getAppStatus);

  useEffect(() => {
    setTimeout(() => {
      dispatch(app.setStatus("success"));
    }, 3000);
  }, [dispatch]);

  return (
    <>
      <h1>{`App status: ${appStatus}`}</h1>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
        >
          First
        </NavLink>
        <NavLink
          to="/second"
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
        >
          Second
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
  );
};

export const App = memo(AppRaw);
export default App;
