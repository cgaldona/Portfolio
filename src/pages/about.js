/**
 * Author: carlos Galdona 301271660
 * Date: December 05, 2024
 */

import '../App.css';
import Container from 'react-bootstrap/esm/Container';
import image from '../images/carlosperfil.jpg';

function About() {
    return (
        <>
            <div className="App bg-dark text-light">
                <header className="App-header">
                    <Container>                 
                        <img 
                            src={image} 
                            alt="Carlos Galdona" 
                            className="d-block mx-auto my-4" 
                            style={{ width: '175px', borderRadius: '25%' }} 
                        />                        
                        <p>Hello! My name is Carlos Eduardo Galdona. Originally from Venezuela.
                            I hold an Basic programming, Testing QA certifications and I am currently studying Software Engineering Technician at Centennial College.
                        </p>                     
                                               
                        <p>While my academic journey initially began in dentistry back home, I discovered a passion for web design and programming that led me to pursue a new path.  
                        I've been immersed in the world of IT ever since, currently studying in Toronto, Canada to further refine my skills.  Throughout this journey, I've built a strong foundation in various programming languages and frameworks, including JavaScript, React, 
                        and Node.js. My projects range from simple static websites to complex web applications.</p>                       
                        
                        <p> I am a dedicated and enthusiastic web developer with a commitment to continuous learning.
                            I am excited about the future of web development and look forward to contributing my skills and passion to a dynamic and innovative team.
                            I hope to have the opportunity to discuss how I can contribute to your organization.</p>
                        
                        
                    </Container>
                </header>
            </div>
        </>
    );
}

export default About;
