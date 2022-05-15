import React from "react";
import Popup from "reactjs-popup";

const Book = ({ book }) => {
    function showPic() {
        if (book.volumeInfo.imageLinks === undefined) {
            return "https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png";
        } else {
            return book.volumeInfo.imageLinks.smallThumbnail;
        }
    }

    return (
        <div className="book">
            <img src={showPic()} alt={book.volumeInfo.title} />
            <h3> {book.volumeInfo.title}</h3>
            <h5>{book.volumeInfo.authors}</h5>

            <Popup
                trigger={<button className="detail-btn">Details</button>}
                position="center center"
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
