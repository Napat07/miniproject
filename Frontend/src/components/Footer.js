import React from 'react';
import { Container, Row, Col, NavbarBrand } from 'reactstrap';
import './footerStyle.css';
import { MdPhone } from "react-icons/md";
import { FaFacebook, FaGithub } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'

function Footer() {
    return (
        <div className="justify-content-center align-self-end">
            <br />
            <br />
            <footer className="Footer-BackGround-Color">
                <Container >
                    <Row >
                        <Col md="3">
                            <NavbarBrand href="/">
                                <img src="/logo-wi.PNG" class="round_image" alt="..." />
                            </NavbarBrand>
                        </Col>
                        <Col lg="6" style={{ marginTop: 10 }} >
                            <Row  >
                                <Col sm="4" class="text-left" >
                                    <div >
                                        <MdPhone size={47} style={{ color: '#000000' }} />
                                        <a class="text-dark">083-653-4304</a>
                                    </div>

                                </Col>
                                <Col sm="5">
                                    <div >
                                        <FaFacebook size={47} style={{ color: '#000000' }} />
                                        <a href="https://www.facebook.com/newnapat17" class="text-dark">Napat Binsa-ard</a>
                                    </div>
                                </Col>
                                <Col>
                                    <div >
                                        <FaGithub size={47} style={{ color: '#000000' }} />
                                        <a href="https://www.github.com/Napat07" class="text-dark">Napat07</a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}
export default Footer;