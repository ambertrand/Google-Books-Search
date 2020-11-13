import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBox, FormBtn } from '../components/Form';
// import API from '../utils/API';
// import Book from '../components/Book';

const Search = () => {
   

    return(
        <Container>
            <Row>
                <Col>
                    <form>
                        <p>Book Search</p>
                        <SearchBox
                            name="book search"
                            placeholder="Book Title"
                        />
                        <FormBtn
                        
                        // onClick={handleFormSubmit}
                        >
                        Search
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;