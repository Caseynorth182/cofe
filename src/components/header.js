import './header.scss';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const Header = () => {

    return (
        <header className='header'>
            <Container>
                <Row>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">Coffee house</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">Our coffee</NavLink>
                            </li>
                            <li>
                                <NavLink to="/our">For your pleasure</NavLink>
                            </li>
                        </ul>
                    </nav>
                </Row>
            </Container>
        </header>
    )
}


export default Header;