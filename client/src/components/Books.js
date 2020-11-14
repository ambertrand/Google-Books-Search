import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import API from '../utils/API';


const Books = ({ bookData }) => {
    
    function handleBookSubmit(event) {
        event.preventDefault();
        if (bookData.title) {
            API.saveBook(
                {
                    id: bookData.id,
                    title: bookData.volumeInfo.title,
                    author: bookData.volumeInfo.author,
                    description: bookData.volumeInfo.description,
                    image: bookData.volumeInfo.imageLinks.thumbnail,
                    link: bookData.volumeInfo.infoLink
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
                            <Card.Title>{bookData.title}</Card.Title>
                            <Card.Subtitle>{bookData.subtitle}</Card.Subtitle>
                        
                            <ButtonGroup>
                                <Button href={bookData.infoLink} size="sm">View</Button>
                                <Button size="sm" onClick={handleBookSubmit}>Save</Button>
                            </ButtonGroup>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </Container>
    )
}

export default Books;