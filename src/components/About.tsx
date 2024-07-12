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
        <div className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="profile-image">
                    {/* Optional: Add your profile image */}
                    <img src="path/to/profile-image.jpg" alt="Profile" />
                </div>
                <div className="profile-info">
                    <p>
                        My name is Jeffrey Li and I am a third year at Worcester Polytechnic Institute majoring in Computer Science and Math.
                    </p>
                    <p>
                        Vestibulum pretium, lectus nec venenatis volutpat, purus lectus ultrices risus,
                        a condimentum risus mi et quam. Pellentesque auctor neque nec urna.
                    </p>
                    <div className="skills-list">
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