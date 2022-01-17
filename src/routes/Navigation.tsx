import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ name, to }, idx) => (
                <li key={idx}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ Component, to }) => (
              <Route key={to} path={to} element={<Component />} />
            ))}

            <Route path={'/*'} element={<Navigate to={routes[0].to} replace={true} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
