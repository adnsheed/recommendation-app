import React, { useState } from "react";
import Book from "./Book";
import axios from "axios";
import ShowModal from "./Modal";

const API_KEY = "AIzaSyDCtgzRKX0lMhORlIH9uGx73supItMO53k";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState(true);
    const [error, setError] = useState("");

    const getBooks = (value) => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${API_KEY}`
            )
            .then((response) => {
                if (response.data.items === undefined) {
                    throw Error("No books found :(");
                } else {
                    setBooks(response.data.items);
                    setError("");
                }
            })
            .catch((err) => {
                setError(err.message);
                setBooks([]);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getBooks(e.target[0].value);
        setTitle(false);
    };

    function show() {
        if (books.length === 0) return false;
        else return true;
    }

    return (
        <>
            <div className="search-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" required />
                    <button>🔍</button>
                </form>
            </div>
            {title && (
                <button className="rec2-btn" disabled={true}>
                    Search the books and chose recommended
                </button>
            )}

            {error && <div className="err">{error}</div>}

            {show() && (
                <ShowModal
                    books={books[Math.floor(Math.random() * books.length)]}
                />
            )}

            <div className="books-container">
                {books &&
                    books.map((book) => <Book book={book} key={book.id} />)}
            </div>
        </>
    );
};

export default Books;
