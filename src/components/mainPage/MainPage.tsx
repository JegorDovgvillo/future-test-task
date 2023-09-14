import React, { useEffect, useState } from "react";
import { CardBooks } from "@/src/models/books";
import { useAppDispatch, useAppSelector } from "../../hook/customHooks";
import { fetchAllBooks, loadMore, getTotalBooks } from "./mainPageSlice";

import SearchForm from "../searchForm/SearchForm.tsx";
import BookCard from "../bookCard/BookCard.tsx";
import Spinner from "../spinner/Spinner.tsx";

import "./mainPage.scss";
import './adaptate.scss'

const MainPage = () => {
  const dispatch = useAppDispatch();
  const loadingStatus = useAppSelector((state) => state.mainPage.loadingStatus);
  const books = useAppSelector((state) => state.mainPage.elems);
  const startIndex = useAppSelector((state) => state.mainPage.startIndex);
  const [search, setsearch] = useState({
    str: "*",
    category: "*",
    orderBy: "relevance",
  });
  useEffect(() => {
    dispatch(getTotalBooks(search));
    dispatch(fetchAllBooks({}));
  }, [dispatch]);

  const onHandleChange = (str: string, category: string, orderBy: string) => {
    setsearch({
      str,
      category,
      orderBy,
    });
    dispatch(getTotalBooks(search));
    dispatch(fetchAllBooks({ str, category, orderBy }));
  };
  return (
    <>
      <SearchForm
        onClick={(str, category, orderBy) =>
          onHandleChange(str, category, orderBy)
        }
      />
      {loadingStatus === "loading" ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <View
            books={books}
            startIndex={startIndex}
            search={search}
            loadingStatus={loadingStatus}
          />
        </>
      )}
    </>
  );
};
const View = ({
  books,
  startIndex,
  search: { category, str, orderBy },
  loadingStatus,
}: {
  books: CardBooks[];
  startIndex: number;
  search: { category: string; str: string; orderBy: string };
  loadingStatus: string;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="container-main">
      <>
        <ul className="books-list">
          {books.map((item, i) => {
            return (
              <li className="books-list__item" key={i}>
                <BookCard key={item.id} {...item} />
              </li>
            );
          })}
        </ul>
        {loadingStatus === "loadingMore" ? (
          <Spinner />
        ) : loadingStatus === "max results" ? null : (
          <button
            type="button"
            onClick={() => {
              dispatch(loadMore({ str, category, orderBy, startIndex }));
            }}
          >
            Load more
          </button>
        )}
      </>
    </div>
  );
};
export default MainPage;
