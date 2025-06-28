import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1-image-1.png";
import h5 from "../assets/img/H5.png";
import hackathon from "../assets/img/hackathon.png";
import commingSoon from "../assets/img/soon.png";
import jiraSlack from "../assets/img/jira-slack.webp";
import kafkaCert from "../assets/img/kafka-certificate.png";
import javaCert from "../assets/img/java-certificate.png";
import awsCert from "../assets/img/AWS-certificate.png";
import esCert from "../assets/img/ES-certificate.png";
import springBootCert from "../assets/img/springboot-certificate.png";
import appsecCert from "../assets/img/Appsec-certificate.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("third"); // state to track active tab
  const [heading, setHeading] = useState("Projects");
  const [description, setDescription] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  );

  const projects = [
    {
      title: "Tech Visionary",
      description: "Personal Portfolio",
      imgUrl: projImg1,
      link: "#",
      handleClick: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    },
    {
      title: "Comming Soon...",
      description: "Comming Soon...",
      imgUrl: commingSoon
    }
  ];

  const certifications = [
    {
      title: "Core Java Certificate",
      description: "This certification demonstrates proficiency in Core Java.",
      imgUrl: javaCert,
      link: "https://www.udemy.com/certificate/UC-181d0e93-0c21-46a5-8543-6ea48e5bd727/"
    },
    {
      title: "Spring Boot Certificate",
      description: "This certification demonstrates expertise in Spring Boot framework.",
      imgUrl: springBootCert,
      link: "https://www.udemy.com/certificate/UC-20a0af29-86f6-48c6-be32-756f5b838808/"
    },
    {
      title: "Apache Kafka Certificate",
      description: "This certification showcases knowledge of Apache Kafka for messaging.",
      imgUrl: kafkaCert,
      link: "https://www.udemy.com/certificate/UC-4a2e87b8-9a99-4107-8c72-3f10e1a3c390/"
    },
    {
      title: "AWS Certificate",
      description: "This certification demonstrates proficiency in AWS services.",
      imgUrl: awsCert,
      link: "https://www.udemy.com/certificate/UC-e10c56eb-ea6d-4f07-af20-d09d369cc130/"
    },
    {
      title: "ElasticSearch Certificate",
      description: "This certification shows proficiency in ElasticSearch.",
      imgUrl: esCert,
      link: "https://www.udemy.com/certificate/UC-b2b48a47-2eec-4f0f-b597-9cf0e404138d/"
    },
    {
      title: "AppSec Certificate",
      description: "This certification demonstrates knowledge in Application Security.",
      imgUrl: appsecCert,
      link: "https://www.udemy.com/certificate/UC-e2f75667-c3e6-43a8-9818-2eab418e9c51/"
    }
  ];

  const achievements = [
    {
      title: "5H Award - Armorcode",
      imgUrl: h5,
      description: "Awarded for exhibiting qualities of Hard Working, Honesty, Humility, Humanity, and Hunger, reflecting exceptional contribution to the company."
    },
    {
      title: "Technex-22 Hackathon Winner",
      imgUrl: hackathon,
      description: "Won the Technex-22 Hackathon sponsored by GitHub, securing a 15k INR cash prize and exclusive GitHub swags."
    },
    {
      title: "Amazon Vouchers for Jira-Slack Automation",
      imgUrl: jiraSlack,
      description: "Awarded Amazon vouchers worth 10k INR by Armorcode for designing and building an automated Jira-Slack Thread messaging system, improving cross-team communication."
    }
  ];

  useEffect(() => {
    switch (activeTab) {
      case "first":
        setHeading("Projects");
        setDescription("Explore some of the exciting projects I've worked on. Click to learn more.");
        break;
      case "second":
        setHeading("Certifications");
        setDescription("Check out the certifications I have earned, showcasing my expertise in various technologies.");
        break;
      case "third":
        setHeading("Achievements");
        setDescription("Here are some of the notable achievements I've earned throughout my career.");
        break;
      default:
        setHeading("Projects");
        setDescription("Explore some of the exciting projects I've worked on. Click to learn more.");
        break;
    }
  }, [activeTab]);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{heading}</h2>
                  <p>{description}</p>
                  <Tab.Container
                    id="projects-tabs"
                    activeKey={activeTab}
                    onSelect={(key) => setActiveTab(key)} // Update active tab on tab change
                    defaultActiveKey="first"
                  >
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certifications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Achievements</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => (
                              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                                <div className="project-card">
                                  <img src={project.imgUrl} alt={project.title} className="img-fluid" />
                                  <div className="project-info">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    {index === 0 ? (
                                      <a onClick={project.handleClick} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                                    ) : (
                                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
                                    )}
                                  </div>
                                </div>
                              </Col>
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            certifications.map((cert, index) => (
                              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                                <div className="certification-card">
                                  <img src={cert.imgUrl} alt={cert.title} className="img-fluid" />
                                  <div className="certification-info">
                                    <h4>{cert.title}</h4>
                                    <p>{cert.description}</p>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                      View Certificate
                                    </a>
                                  </div>
                                </div>
                              </Col>
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            achievements.map((achievement, index) => (
                              <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
                                <div className="achievement-card">
                                  <img src={achievement.imgUrl} alt={achievement.title} className="img-fluid" />
                                  <div className="achievement-info">
                                    <h4>{achievement.title}</h4>
                                    <p>{achievement.description}</p>
                                  </div>
                                </div>
                              </Col>
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
