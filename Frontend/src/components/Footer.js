import React from 'react';
import { Container, Row, Col,NavbarBrand} from 'reactstrap';
import './footerStyle.css';
import { MdPhone,MdPlace,MdMail } from "react-icons/md";
import { FaFacebook ,FaGithub} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {
    return (
        <div className="justify-content-center align-self-end">
                <br/>
                <br/>
            <footer  className="Footer-BackGround-Color">
            <Container >
                <Row >
                    <Col md="2">
                        <NavbarBrand href="/">
                            <img src="./market-logo.png" className="d-block w-100" alt="..."/>
                        </NavbarBrand>
                    </Col>
                    <Col lg="6" style={{marginTop:10}} >
                        <Row  >
                            <Col sm="4" class="text-left" >
                                <div >
                                    <MdPhone size={47} style={{color: '#000000'}} />
                                    <a class="text-dark">083-653-4304</a>
                                </div>
                                
                            </Col>
                            <Col sm="5">
                                <div >
                                    <FaFacebook size={47} style={{color: '#000000'}} />
                                    <a href="https://www.facebook.com/newnapat17" class="text-dark">Napat Binsa-ard</a>
                                </div>
                            </Col>
                            <Col>
                                <div >
                                    <FaGithub size={47} style={{color: '#000000'}}/>
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