import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
    return(
        <Jumbotron fluid className="text-center">
            <Container>
                <h1 className="display-4"><strong>Google Books Search</strong></h1>
                <p>Search for and Save Books of Interest</p>
            </Container>
        </Jumbotron>
    )
}

export default Header;