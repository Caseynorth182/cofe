import { Card } from 'react-bootstrap';




const BestItem = (props) => {
    console.log(props.thumb);
    const imageUrl = `${props.thumb.path}.${props.thumb.extension}`

    return (
        <Card style={{ flex: '0 0 30%' }} >
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.descr ? props.descr : 'Нет описания'}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}


export default BestItem;