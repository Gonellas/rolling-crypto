import './Header.css'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {

    return ( 
  <Navbar variant="dark" className='main-nav d-flex justify-content-center'>
    <Container fixed="top">         
        <Link to="/" className='h4 logo navbar-brand'>Rolling Crypto</Link>
    </Container>
  </Navbar> );
}
 
export default Header;