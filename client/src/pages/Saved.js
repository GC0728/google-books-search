import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
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
          </Col>
        </Row>
        <Row>
          <Col size="sm-12 md-offset-1">
            <Jumbotron>
              <article>
                <form>
                  <FormBtn
                    disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Delete Book
                  </FormBtn>
                  <FormBtn
                    disabled={!(this.state.author && this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    View Book Details
                  </FormBtn>
                </form>
                <h1>Saved Books</h1>
                <p>
                  {this.state.book.synopsis}
                </p>
              </article>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
