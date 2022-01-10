import React from "react";
import Popup from "reactjs-popup";

const Book = ({ book }) => {
    return (
        <div className="book">
            <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
            />
            <h3> {book.volumeInfo.title}</h3>
            <h5>{book.volumeInfo.authors}</h5>

            <Popup
                trigger={<button className="detail-btn">Details</button>}
                position="right center"
            >
                <div className="popup">
                    <p>Publisher: {book.volumeInfo.publisher}</p>
                    <p>Page Count: {book.volumeInfo.pageCount}</p>
                    <p>Average Rating: {book.volumeInfo.averageRating}</p>
                    <p>Ratings Count: {book.volumeInfo.ratingsCount}</p>
                </div>
            </Popup>
        </div>
    );
};

export default Book;
