import React, {useContext} from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
import { routes } from '../router/index';
import { publicRoutes, privateRoutes } from "../router";
import { AuthContext } from '../context/index';

const AppRouter = () => {
  const { isAuth, setIsAuto } = useContext(AuthContext);
  console.log(isAuth)
  return (
    isAuth
      ? <Routes>
        {privateRoutes.map(route => 
          <Route
            element={route.element}
            path={route.path}
            key={route.path}
          />
        )}
        </Routes>
      : <Routes>
        {publicRoutes.map(route => 
          <Route
            element={route.element}
            path={route.path}
            key={route.path}
          />
          )}
        </Routes>
    );
};

export default AppRouter;

