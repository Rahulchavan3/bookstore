import {useParams,Link} from 'react-router-dom'
import useFetch from '../Components/useFetch';

const Bookgenre = () => {
    const {genre} = useParams();
    const {data : books} = useFetch('http://localhost:8080/books/');
    const booklist =  books.filter((book)=>book.genre === genre);
    
     
    return ( 
        <>
        <h1 className="bookgenre-title">{genre}</h1>
        <div className="bookgenre-container">
            {booklist.map((book) => (
            <div className="bookgenre-card"  key={book.id}>
            <Link to={`/detail/${book.id}`}  className="bookgenre-link">
            <img src={book.image} alt={book.title} className="bookgenre-image" />
                <h2 className="bookgenre-title-h2">{book.title}</h2>
                <p className="bookgenre-author">{book.author}</p>
                <p className="bookgenre-price">₹{book.price}</p>
                
                <button  className="add-to-cart-button">Add to Cart</button>
               
                
            </Link>
                
            </div>
        ))}
      </div>
            
        </>
     );
}
 
export default Bookgenre;