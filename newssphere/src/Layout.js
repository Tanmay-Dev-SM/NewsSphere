import React from "react";
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
};

export default function Layout() {
  const [searchOptions, setSearchOptions] = React.useState({
    ...defaultSearchOptions,
  });
  return (
    <>
      <Header
        searchOptions={searchOptions}
        setSearchOptions={setSearchOptions}
      />
      <Outlet context={[searchOptions, setSearchOptions]} />
    </>
  );
}
