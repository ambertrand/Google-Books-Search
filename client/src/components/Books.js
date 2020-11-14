import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Image from 'react-bootstrap/Image';
import API from '../utils/API';


const Books = ({ volumeInfo }) => {
    
    function handleBookSubmit(event) {
        event.preventDefault();
        if (volumeInfo.title) {
            API.saveBook(
                {
                    id: volumeInfo.id,
                    title: volumeInfo.title,
                    author: volumeInfo.authors,
                    description: volumeInfo.description,
                    image: volumeInfo.imageLinks.thumbnail,
                    link: volumeInfo.infoLink
                }
            )
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    }
    
    
    return (

        <Container fluid>
            <Row>
                <Col md={12}>
                    <Card className="mb-2">
                        <Card.Body>
                            <Card.Title>{volumeInfo.title}</Card.Title>
                            <Card.Subtitle>{"Written By " + volumeInfo.authors}</Card.Subtitle>
                            <Card.Text>{volumeInfo.description}</Card.Text>    
                            <Card.Text><Image src={volumeInfo.imageLinks.thumbnail} alt="Book Cover" thumbnail />{volumeInfo.description || "No description provided by Google Books"}</Card.Text>                     
                            <Card.Link href={volumeInfo.infoLink}></Card.Link>
                            <ButtonGroup>
                                <Button href={volumeInfo.infoLink} size="sm" variant="outline-primary">View</Button>
                                <Button className="ml-2" size="sm" variant="outline-primary" onClick={handleBookSubmit}>Save</Button>
                            </ButtonGroup>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    )
}

export default Books;