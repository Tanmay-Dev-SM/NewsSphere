import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

// OUR COMPONENTS
import Header from "./components/Header/Header";

const defaultSearchOptions = {
  query: null,
  exact_phrase: "",
  has_words: "",
  exclude_words: "",
  website: "",
  date: 0,
  source_lang: "en",
  dest_lang: "en",
};

export default function Layout() {
  const [searchOptions, setSearchOptions] = React.useState({});
  const search = useSelector((state) => state.search);
  return (
    <div style={{ height: "100%" }}>
      <Header searchOptions={search} setSearchOptions={setSearchOptions} />
      <Outlet />
    </div>
  );
}
