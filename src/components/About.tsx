import styles from "./About.module.css";

const About: React.FC = () => {
    // Example data for skills (replace with your actual skills)
    const skills = [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'HTML',
        'CSS',
        // Add more skills as needed
    ];

    return (
        <div className={styles.aboutContainer}>
            <h1>About Me</h1>
            <div className={styles.aboutContent}>
                <div className={styles.profileImage}>
                    {/* Optional: Add your profile image */}
                    <img src="path/to/profile-image.jpg" alt="Profile" />
                </div>
                <div className={styles.profileInfo}>
                    <p>
                        My name is Jeffrey Li and I am a third year at Worcester Polytechnic Institute majoring in Computer Science and Math. My Computer science interests include Software Engineering, System Design and Artificial Intelligence. My Mathematical interests include statistics and quantative analysis.
                    </p>
                    <p>
                        Outside of academics, I am an avid runner and speedcuber.
                    </p>
                    <div className={styles.skillsList}>
                        <h3>Skills</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;