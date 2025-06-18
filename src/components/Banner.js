import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/my-image.png";
import { Download } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Resume-Sanket.pdf"; // Replace with the actual path to your resume
    link.download = "Resume.pdf"; // The name of the downloaded file
    link.click();
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Sanket,`} <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "SoftwareDeveloper" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a passionate software developer with over a year of experience in crafting seamless and efficient software solutions. From designing dynamic frontend interfaces to building robust backend systems, I specialize in delivering full-stack applications that truly make an impact. My expertise also extends to data engineering, where I’ve optimized ETL pipelines to cut down costs and boost operational efficiency.</p>

                  <p>Having worked with a variety of databases, including SQL, NoSQL, and search engines, I bring versatility to every project. I’m also experienced with AWS and GCP, ensuring that the systems I build are scalable and reliable in the cloud. If you’re looking for someone to turn your ideas into high-quality, functional software, I’m here to help you make it happen!</p>
                  <button onClick={handleDownload}>Download Resume <Download size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"
                  className="rounded-image"  // Apply the CSS class for rounded frame
                  />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
