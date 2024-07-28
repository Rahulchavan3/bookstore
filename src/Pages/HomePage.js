import HeroSection from "../Components/HeroSection";
import BookList from "../Components/BookList";


const HomePage = () => {
    return ( 
        <div className="home">
            <HeroSection/>
            <BookList/>
        </div>
     );
}
 
export default HomePage;