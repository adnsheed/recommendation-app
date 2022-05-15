import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const ShowModal = ({ books }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <button className="rec-btn" onClick={handleOpen}>
                Recommend
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3 style={{ margin: "0 0 20px 0", textAlign: "center" }}>
                        {" "}
                        Recommended Book Is
                    </h3>
                    <div className="book-modal">
                        <img
                            src={books.volumeInfo.imageLinks.smallThumbnail}
                            alt={books.volumeInfo.title}
                        />
                        <h3 style={{ color: "black" }}>
                            {" "}
                            {books.volumeInfo.title}
                        </h3>
                        <h5>{books.volumeInfo.authors}</h5>
                        <h5>Page Count: {books.volumeInfo.pageCount}</h5>
                        <a
                            href={books.volumeInfo.canonicalVolumeLink}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#4fc1e9" }}
                        >
                            Read this book online
                        </a>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default ShowModal;
