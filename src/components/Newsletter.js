import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email
      })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Checkout my work<br></br> & Explore My Coding Journey on LeetCode and GitHub</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>

          <Col md={6} xl={7}>
            <div className="profile-buttons">
              <a
                href="https://leetcode.com/u/SanketBanait/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-profile"
              >
                Visit My LeetCode Profile
              </a>
              <a
                href="https://github.com/Shanky-19"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-profile"
              >
                Visit My GitHub Profile
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
