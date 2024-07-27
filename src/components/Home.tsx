import {Link} from "react-router-dom";
import styles from "./Home.module.css"
const Home: React.FC = () => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.homeContent}>
                <h1 className = {styles.textColor}>Welcome to My Portfolio Website</h1>
                <p className = {styles.textColor}>
                    Hello! I'm Jeffrey, a current third year undergraduate student at Worcester Polytechnic Institute (WPI). I am majoring in Computer Science and Math.
                </p>
                <div className={styles.ctaButtons}>
                    <Link to="/portfolio" className={styles.btnPrimary}>
                        View Portfolio
                    </Link>
                    <br/>
                    <Link to="/contact" className={styles.btnSecondary}>
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;