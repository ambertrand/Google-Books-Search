import axios from 'axios';

export default {
    bookSearch: function (searchTerm) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    },

    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
}