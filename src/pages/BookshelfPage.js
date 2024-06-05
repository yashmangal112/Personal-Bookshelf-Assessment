import React from 'react';
import BookshelfCard from '../components/BookshelfCard';

const BookshelfPage = ({ bookshelf }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookshelf</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {bookshelf.map((book, index) => (
          <BookshelfCard key={index} book={book} />
        ))}
      </div>
      <button 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => window.location.href = '/'}
      >
        Back to Search
      </button>
    </div>
  );
};

export default BookshelfPage;
