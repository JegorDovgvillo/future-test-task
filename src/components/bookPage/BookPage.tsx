import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBook } from "./bookPageSlice";
import { useAppDispatch, useAppSelector } from "../../hook/customHooks";

import Spinner from "../spinner/Spinner";

import "./bookPage.scss";
import './adaptate.scss';

const BookPage = () => {
  const info = useAppSelector((state) => state.book.info);
  const loadingStatus = useAppSelector((state) => state.book.loadingStatus);
  const {
    volumeInfo: {
      title,
      description,
      categories,
      authors,
      imageLinks: { small },
    },
  } = info;
  const params = useParams();
  const bookId = params.id;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBook(bookId));
  }, []);
  return (
    <>
      {loadingStatus === "loading" ? (
        <Spinner />
      ) : (
        <div className="book">
          <div className="book__img">
            <img src={small} alt="book" />
          </div>
          <div className="book-info">
            <p className="book-info__categories">
              {categories?.map((item) => {
                return `${item}, `;
              })}
            </p>
            <h2>{title}</h2>
            <p className="book-info__authors">
              {authors?.map((item) => {
                return `${item}, `;
              })}
            </p>
            <p
              className="book-info__description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      )}
    </>
  );
};

export default BookPage;
