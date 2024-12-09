import React, { useState } from "react";
import "./AddNewTradePanel.css";

const AddNewTradePanel = ({ onClose, onSave }) => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    location: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSave(bookData);
    onClose();
  };

  return (
    <div className="add-new-trade-panel">
      <button className="close-panel" onClick={onClose}>
        ×
      </button>
      <h2>Add a New Trade</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Book Title</label>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={bookData.title}
          onChange={handleInputChange}
          required
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={bookData.author}
          onChange={handleInputChange}
          required
        />
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Book Description"
          value={bookData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={bookData.location}
          onChange={handleInputChange}
          required
        />
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={bookData.image}
          onChange={handleInputChange}
        />
        <div className="form-buttons">
          <button type="submit" className="save-button green-button">
            Save Trade
          </button>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
