import React, { useState } from "react";
import "./Home.css";

function Home() {
  const storedBooks = JSON.parse(localStorage.getItem("book-data")) || [];
  const [bookData, setBookData] = useState(storedBooks);

  const favBooks = JSON.parse(localStorage.getItem("fav-books")) || [];

  const styles = {
    card: {
      border: "1px solid white",
      borderRadius: "10px",
      width: "420px",
      height: "510px",
      padding: "20px",
      margin: "20px",
      background: "#f5fffa",
    },
    image: {
      width: "100%",
      height: "50%",
    },
    btngroup: {
      display: "flex",
      justifyContent: "space-between",
    },
    welcome: {
      textAlign: "center",
      padding: "20px",
      margin: "10px",
      background: "lightgrey",
    },
    edit: {
      backgroundColor: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
    delete: {
      backgroundColor: "red",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
  };

  const handleDelete = (id) => {
    const updatedBooks = bookData.filter((book) => book.id !== id);
    localStorage.setItem("book-data", JSON.stringify(updatedBooks));
    setBookData(updatedBooks); // Updates state
  };

  return (
    <div>
      <h1 style={styles.welcome}>Welcome To Book Manager 📖 !</h1>
      <div className="cardBox">
        {bookData.map((data) => (
          <div key={data.id} className="card fade-in" style={styles.card}>
            <img
              src={data.image}
              className="book-image"
              alt={data.name}
              style={styles.image}
            />
            <h2>{data.name}</h2>
            <h5>{data.author}</h5>
            <p>{data.description}</p>
            <div className="button-group" style={styles.btngroup}>
              <button className="edit-btn" style={styles.edit}>
                Edit Book
              </button>
              <button
                className="delete-btn"
                style={styles.delete}
                onClick={() => handleDelete(data.id)}
              >
                Delete Book
              </button>
              <button
                className="fav-btn"
                style={styles.fav}
                onClick={() => handleDelete(data.id)}
              >
                Delete Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
