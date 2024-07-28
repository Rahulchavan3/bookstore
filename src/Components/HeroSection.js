import HeroImage from "../Images/HeroImage.jpg";
import {Link} from "react-router-dom";
const HeroSection = () => {
    return ( 
        <section className="hero-section">
            <div className="container-fluid">
                <div className="row align-items-center h-100">
                    <div className="col-lg-6 image-container">
                        <img 
                            src={HeroImage}
                            alt="Hero" 
                            className="img-fluid" 
                        />
                    </div>
                    <div className="col-lg-6 text-container d-flex align-items-center">
                        <div>
                            <h1 className="display-4">Your Book Adventure Begins Here</h1>
                            <blockquote className="blockquote">
                                <p className="mb-0">"A room without books is like a body without a soul."</p>
                                <footer className="blockquote-footer">Marcus Tullius Cicero</footer>
                            </blockquote> 
                            <Link to="/" className="btn btn-primary">Browse Books</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HeroSection;