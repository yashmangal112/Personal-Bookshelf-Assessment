import React, { useState } from 'react';
import BookCard from '../components/BookCard';
import { ClipLoader } from 'react-spinners';

const BookSearchPage = ({ addToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    if (!query) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`);
    const data = await response.json();
    setResults(data.docs);
    setLoading(false);
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    if (newQuery === '') {
      setResults([]);
      setLoading(false);
    } else {
      searchBooks(newQuery);
    }
  };

  return (
    <div className="container mx-auto p-4">
    <p className='mx-auto font-semibold'>Search by Book name: </p>
      <input 
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books..."
        className="border p-2 w-full mb-4"
      />
      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map(book => (
            <BookCard 
              key={book.key} 
              book={book} 
              addToBookshelf={addToBookshelf} 
              isAdded={bookshelf.some(b => b.key === book.key)}
            />
          ))}
        </div>
      )}
      <button 
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => window.location.href = '/bookshelf'}
      >
        My Bookshelf
      </button>
    </div>
  );
};

export default BookSearchPage;
