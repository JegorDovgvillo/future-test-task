import React, { useState } from "react";
import { useAppSelector } from "../../hook/customHooks";

import search from "../../images/Search.png";

import "./searchForm.scss";
import "./adaptate.scss";
type Props = {
  onClick: (str: string, category: string, orderBy: string) => void;
};
const SearchForm: React.FC<Props> = ({ onClick }) => {
  const [str, setString] = useState("");
  const [category, setCategory] = useState("*");
  const [orderBy, setOrderBy] = useState("relevance");
  const results = useAppSelector((state) => state.mainPage.totalIndex);
  return (
    <div className="container-search">
      <h1>Search for books</h1>
      <form>
        <input
          placeholder="smth"
          className="search-input"
          value={str}
          onChange={(e) => {
            setString(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setString("");
              onClick(str, category, orderBy);
            } else {
              return;
            }
          }}
        />
        <img
          src={search}
          alt="search"
          onClick={() => {
            setString("");
            onClick(str, category, orderBy);
          }}
        />
        <div className="selects-block">
          <label htmlFor="categories">Categories</label>
          <select
            id="categories"
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="*">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
          <label htmlFor="orderBy">Sorting by</label>
          <select
            id="orderBy"
            defaultValue={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </form>
      <p className="results">Found {results} results</p>
    </div>
  );
};

export default SearchForm;
