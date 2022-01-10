import React, { useState } from "react";
import Book from "./Book";
import axios from "axios";
import ShowModal from "./Modal";

const API_KEY = "AIzaSyDCtgzRKX0lMhORlIH9uGx73supItMO53k";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState(true);

    const getBooks = (value) => {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${value}&key=${API_KEY}`
            )
            .then((response) => {
                setBooks(response.data.items);
                // return response.data.items;
            })
            .catch((reason) => {
                console.log(reason);
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
                <button className="rec-btn">
                    Search the books and chose recommended
                </button>
            )}

            {show() && <ShowModal books={books} />}

            <div className="books-container">
                {books &&
                    books.map((book) => <Book book={book} key={book.id} />)}
            </div>
        </>
    );
};

export default Books;
