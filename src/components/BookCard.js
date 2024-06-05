import React from 'react';

const BookCard = ({ book, addToBookshelf, isAdded }) => {
  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/128x192.png?text=No+Cover'; // Placeholder image if no cover available

  return (
    <div className="border p-4 rounded shadow-md flex flex-col justify-between">
      <img src={coverUrl} alt={`${book.title} cover`} className="mb-4" />
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p>{`Edition Count: ${book.edition_count}`}</p>
      {isAdded ? (
        <p className="mt-4 text-green-500">Added in Bookshelf</p>
      ) : (
        <button 
          onClick={() => addToBookshelf(book)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard;

