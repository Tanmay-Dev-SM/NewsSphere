import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout, Home, ErrorPage, DetailedNews, Login } from "src/routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="article/" element={<DetailedNews />}>
          <Route path=":id" element={<DetailedNews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </>
  )
);

export default router;
