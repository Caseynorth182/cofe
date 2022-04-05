import { CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import BestItem from './best-item';
import "./best.scss";
import MarvelAPI from '../../../sevices/MarvelService';
import { Component } from 'react';



class Best extends Component {
    constructor(props) {
        super(props)
        this.sendData()

    }
    state = {
        char: []
    }
    sendData = () => {
        const myTest = new MarvelAPI();
        myTest.getAll().then(res => {
            console.log(res);
            this.setState({
                char: res
            })
        })

    }

    setItems = () => {
        const elements = this.state.char.map(item => {
            return (<BestItem name={item.name} thumb={item.thumbnail} descr={item.description} />)
        })
        return elements
    }



    render() {

        return (
            <section className='best'>
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <h3>Our Best</h3>
                        </Col>

                    </Row>

                    <Row>
                        <CardGroup>
                            {this.setItems()}
                        </CardGroup>
                    </Row>
                </Container>
            </section>
        )
    }

}

export default Best;