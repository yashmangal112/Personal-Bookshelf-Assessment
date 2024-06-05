import React from 'react';

const BookshelfCard = ({ book }) => {
    const coverUrl = book.cover_i 
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` // Medium size for better performance
        : 'https://via.placeholder.com/128x192.png?text=No+Cover'; // Placeholder image if no cover available

    return (
        <div className="border p-4 rounded shadow-md bg-white">
            <img 
                src={coverUrl} 
                alt={`${book.title} cover`} 
                className="mb-4 w-full h-auto object-cover rounded"
            />
            <h2 className="text-lg font-bold mb-2">{book.title}</h2>
            <p className="text-sm text-gray-700">{`Edition Count: ${book.edition_count}`}</p>
        </div>
    );
};

export default BookshelfCard;
