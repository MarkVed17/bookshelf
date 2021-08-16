import React, { useState } from "react";
import "./styles.css";

const bookShelf = {
  javascript: [
    {
      name: "You Don't Know JS!",
      rating: "4/5"
    },
    {
      name: "Eloquent JS",
      rating: "5/5"
    },
    {
      name: "JavaScript: The Good Parts",
      description:
        "The Good Parts, author Douglas Crockford focuses on the basics of some of the lesser-known yet desirable aspects of JavaScript. It’s only recently that these hidden features are getting the appreciation they deserve from the programming community.",
      rating: "4.2/5"
    }
  ],
  fiction: [
    {
      name: "Harry Potter and the Deathly Hallows",
      rating: "4.5/5"
    },
    {
      name: "The Adventures of Sherlock Holmes",
      rating: "5/5"
    },
    {
      name: "Life of Pi : A Novel",
      description:
        "Life of Pi is a Canadian philosophical novel by Yann Martel published in 2001. The protagonist is Piscine Molitor Pi Patel, an Indian Tamil boy from Pondicherry who explores issues of spirituality and metaphysics from an early age. He survives 227 days after a shipwreck while stranded on a lifeboat in the Pacific Ocean with a Bengal tiger which raises questions about the nature of reality and how it is perceived and told. He is part of a Tamil speaking family.",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Pyjama Profit",
      rating: "4/5"
    },
    {
      name: "Rich Dad Poor Dad",
      rating: "4.5/5"
    },
    {
      name: "Zero to One",
      description:
        "Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters. It is a condensed and updated version of a highly popular set of online notes taken by Masters for the CS183 class on startups, as taught by Thiel at Stanford University in Spring 2012.",
      rating: "4.2/5"
    }
  ]
};

var books = Object.keys(bookShelf);

export default function App() {
  const [genre, setGenre] = useState("javascript");

  function bookClickHandler(genre) {
    // processing
    console.log(genre);
    setGenre(genre); // react call to show output
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="bookshelf">
          📚
        </span>{" "}
        bookshelf
      </h1>
      <p>explore your genre.</p>
      {/* Actual output set by React using useState */}

      {books.map((genre) => {
        return (
          <button
            onClick={() => bookClickHandler(genre)}
            key={genre}
            style={{
              cursor: "pointer",
              background: "rgb(229, 231, 235)",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul style={{ paddingInlineStart: "0px", textAlign: "left" }}>
        {bookShelf[genre].map((book) => {
          return (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                margin: "1rem 0rem",
                fontSize: "larger"
              }}
              key={book.name}
            >
              <div>{book.name}</div>
              <div>{book.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
