import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container, } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import SearchResults from "../components/SearchResults";

class Books extends Component {
  constructor(props) {
    super(props);
  this.state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    search: ""
  };
};

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      API.searchBooks(
        this.state.search
      )
        .then(res => {
          let searchResults = res.data.items;
          // console.log(searchResults);
          searchResults.map(searchResult => {
            searchResult = {
              key: searchResult.id,
              title: searchResult.volumeInfo.title,
              author: searchResult.volumeInfo.authors,
              caption: searchResult.searchInfo.textSnippet,
              image: `"${searchResult.volumeInfo.imageLinks.smallThumbnail}"`
            }
            console.log(searchResult.image);
            return searchResult;
          })
          this.setState({
            books: searchResults
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1>
                (React) Google Books Search
              </h1>
              <p className="font-weight-lighter">
                <em>
                Search for and save books for future reading
                </em>
              </p>
            </Jumbotron>
            <Jumbotron>
              <form>
                <Input
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Enter Book Title"
                />
                <FormBtn
                  onClick={this.handleFormSubmit}
                >
                  Search Google Books
                </FormBtn>
              </form>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <Container fluid>
              <SearchResults
                books={this.state.books}
                // key={this.state.books.id}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
