import { useParams } from 'react-router-dom';
import useFetch from '../Components/useFetch';

import { useNavigate } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  // Fetch all books and filter for the specific book by ID
  const { data: books } = useFetch('http://localhost:8080/books/');
  const book = books.find((book) => book.id === id);
  
    const handleClick=()=>{
        navigate('/cart');
    }

  // Conditional rendering to handle loading state or book not found
  if (!book) {
    return <p>Loading or Book not found...</p>;
  }

  return (
        <div className="detail-page">
        <div className="detail-card">
              <img
                src={book.image}
                alt={book.title}
                className="details-image"
            />
            <div className="detail-info">
                <h1 className="details-title">{book.title}</h1>
                <h2 className="details-author">Written By: {book.author}</h2>
                <p className="details-description">{book.description}</p>
                <p className="details-publication-date">
                    Publication Date: {book.publicationDate}
                </p>
                <p className="details-price">Price: ₹{book.price}</p>
                <button onClick={handleClick} className="add-to-cart-button-details">Add to Cart</button>
            </div>
            
          </div>
      </div>
     


    
    
  );
};

export default DetailsPage;
