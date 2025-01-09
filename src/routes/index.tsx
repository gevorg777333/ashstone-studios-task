import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {RoutesConstants} from "./constants";
import Posts from "../pages/Posts";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={RoutesConstants.root()} element={<Posts />} />
            <Route path={RoutesConstants.posts()} element={<Posts />} />
        </Routes>
    );
};
