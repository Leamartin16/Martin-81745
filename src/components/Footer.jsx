// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../assets/css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="footer-content justify-content-between align-items-start">
                    <Col lg={4} md={6} className="footer-section">
                        <h3>Exsoa</h3>
                        <p className="footer-description">
                            Tu destino exclusivo para lentes Ray Ban originales. 
                            Calidad, estilo y autenticidad en cada par.
                        </p>
                        <div className="social-icons">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </Col>

                    <Col lg={3} md={6} className="footer-section">
                        <h4>Contacto</h4>
                        <ul className="footer-contact">
                            <li>📍 Av. Principal 123, Buenos Aires</li>
                            <li>📞 +54 11 1234-5678</li>
                            <li>✉️ info@exsoa.com</li>
                            <li>🕒 Lun - Vie: 10:00 - 19:00</li>
                        </ul>
                    </Col>
                </Row>

                <Row className="footer-bottom">
                    <Col className="text-center">
                        <p>© {currentYear} Exsoa - Todos los derechos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;