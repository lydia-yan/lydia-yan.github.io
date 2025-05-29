import {useEffect, useState, useCallback} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/photo.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Software Developer', 'Graduate Student', 'UI/UX Designer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100 - Math.random() * 50);
    const period = 1500;
    
    const tick = useCallback(() => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        
        if (!isDeleting && updatedText === fullText){
            // After text is fully displayed, wait for period time before deleting
            setIsDeleting(true);
            setDelta(period); // Use period as waiting time
        } else if (isDeleting && updatedText === ''){
            // After deletion is complete, pause briefly before starting next one
            setIsDeleting(false);
            setLoop(loop + 1);
            setDelta(300);
        } else if (isDeleting) {
            // Maintain fast deletion speed during deletion process
            setDelta(50);
        } else {
            // Maintain normal typing speed during typing process
            setDelta(80);
        }
    }, [loop, isDeleting, text, toRotate, period]);
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
    }, [delta, tick]);

    return (
        <section className="banner" id="home">
            {/* Decorative elements */}
            <div className="decorative-dots"></div>
            <div className="decorative-lines"></div>
            <div className="floating-shapes"></div>
            <div className="floating-shapes"></div>
            
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>Hi, I'm Moyan.</h1>
                        <h2 className="dynamic-text">I am a <span className="txt-rotate wrap">{text}</span></h2>
                        <p>"Learning. Building. Debugging. Repeating."</p>
                        <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            Explore my project
                            <ArrowRightCircle size={25} />
                        </button>
                        </div>
                        }
                        </TrackVisibility>
                    </Col> 
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;