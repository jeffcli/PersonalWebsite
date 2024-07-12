import {Link} from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    Hello! I'm [Your Name], a [Your Profession]. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Integer nec odio. Praesent libero.
                </p>
                <div className="cta-buttons">
                    <Link to="/portfolio" className="btn-primary">
                        View Portfolio
                    </Link>
                    <Link to="/contact" className="btn-secondary">
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;