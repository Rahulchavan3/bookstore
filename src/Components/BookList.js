import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const BookList = () => {
    const { data: books } = useFetch('http://localhost:8000/books');

    // Extract unique genres from the books data
    const uniqueGenres = Array.from(new Set(books.map(book => book.genre)));

    return (
        <>
            <h1 className="book-list-title">View All Categories</h1>
            <div className="book-list">
                {uniqueGenres.map(genre => (
                    <div key={genre} className="book-card">
                        <Link to={`/books/${genre}`} className="book-link">
                            <img
                                src={`${books.find(book => book.genre === genre).image}`}
                                alt={genre}
                                className="book-image"
                            />
                            <p className="book-genre">{genre}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BookList;
