import { NavLink } from "react-router-dom";
import { CardBooks } from "../../models/books";

import React from "react";
import noImages from "../../images/noImage.jpg";

import "./bookCard.scss";

const BookCard = ({
  id,
  volumeInfo: { imageLinks, title, authors, categories },
}: CardBooks) => {
  return (
    <NavLink to={`./BookPage/${id}`} className="card-info">
      {imageLinks?.smallThumbnail ? (
        <img
          src={imageLinks.smallThumbnail}
          alt="book"
          className="card__image"
        />
      ) : (
        <img src={noImages} alt="book1" className="card__image" />
      )}
      <div className="card-info__container">
        <p className="card-info__container-tags">
          {categories ? categories : null}
        </p>
        <p>
          {title
            ? title.length > 50
              ? title.slice(0, 50) + "..."
              : title
            : null}
        </p>
        {authors?.map((item, i) => {
          return <span key={i}>{item}</span>;
        })}
      </div>
    </NavLink>
  );
};

export default BookCard;
