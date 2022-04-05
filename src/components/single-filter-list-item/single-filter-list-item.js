import { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import "./single-filter-list-item.scss"

class SingleFilterListItem extends Component {


    render() {

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.body}
                    </Card.Text>
                    <Button variant="primary">{this.props.filter}</Button>
                </Card.Body>
            </Card>
        )
    }
}


export default SingleFilterListItem;