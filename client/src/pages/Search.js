import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchBox, FormBtn } from '../components/Form';
import Books from '../components/Books';
import API from '../utils/API';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState({});
    const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     loadBooks()
    // });

    function loadBooks() {
        API.searchBooks(searchTerm)
            .then(res =>
                setBooks(res.data.items)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm(value);
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (searchTerm) {
            loadBooks();
            console.log(books);
        };
    };




    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <form>
                            <p>Book Search</p>
                            <SearchBox
                                onChange={handleInputChange}
                                name="book search"
                                placeholder="Book Title"
                            />
                            <FormBtn
                                onClick={handleFormSubmit}
                            >
                                Search
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
            <section>
                <Container className="mt-3">
                    <h2>Results</h2>
                    <Row>
                        {books ? books.map((book) => (
                            <Books
                                key={book.id}
                                volumeInfo={book.volumeInfo}
                            />
                        )) : null}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Search;