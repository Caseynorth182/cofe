import { NavLink } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';
import './main-about.scss'

const MainAbout = (props) => {
    return (
        <section className="hero">
            <Container>
                <Row>
                    <Col className="text-center hero-wrap">
                        <h1>Everything You Love About Coffee</h1>
                        <hr />
                        <p>
                            We makes every day full of energy and taste
                            <br />
                            Want to try our beans?
                        </p>
                        <Button variant="info">
                            <NavLink to="/our">Home</NavLink>
                        </Button>{' '}
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default MainAbout;