import './Footer.css'
import {Container, Row, Col} from 'react-bootstrap'
import {RiBitCoinLine} from 'react-icons/ri'
import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <div fixed="bottom" className="w-100 text-center footer-style">
        <Container fluid className="d-flex flex-column justify-content-center align-items-center" >
            <Row>
                <Col className='logo2 p-2'>
                <p><RiBitCoinLine/> Rolling Crypto, Inc.</p>
                </Col>
            </Row>
        </Container>
        </div>
     );
}
 
export default Footer;