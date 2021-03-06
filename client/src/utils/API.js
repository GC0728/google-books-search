import axios from "axios";
const BooksAPI = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  // Gets all books
  searchBooks: function(query) {
    return axios.get(BooksAPI + query);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
