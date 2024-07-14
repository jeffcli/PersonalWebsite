import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'; // Optional: for styling

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link to="/" className={styles.navbarLogo}>
                    Jeffrey Li
                </Link>
                <div className={styles.menuIcon}>
                    {/* Optional: Add hamburger menu icon for mobile */}
                </div>
                <ul className={styles.navMenu}>

                    <li className={styles.navItem}>
                        <Link to="/about" className={styles.navLinks}>
                            About
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/portfolio" className={styles.navLinks}>
                            Portfolio
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/contact" className={styles.navLinks}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;