import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// pages
import Home from "./pages/home/home/Home";

// components
import Jumbotron from "./components/jumbotron/Jumbotron";

// create our main graphql endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    // wrap our app in the ApolloProvider component and pass in our client
    <ApolloProvider client={client}>
      <Router>
        <Container fluid>
          <Row className="header-row">
            {/* Header will contain Head of site, logo, Home, About, Contact, Additional Reading */}
            <Col id="logo">
              <p>Logo</p>
            </Col>
            <Col id="header">
              <h1>UDL for Teachers</h1>
            </Col>
            <Col id="nav">
              <Routes>
                <Route path="/" component={Home} />
                {/* <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/additional-reading" component={AdditionalReading} /> */}
              </Routes>
            </Col>
          </Row>
          <Row className="jumboTron">
            {/* Jumbotron contains a carousel of videos and a brief description of the site */}
            <Jumbotron />
          </Row>
          <Row className="main"></Row>
          <Row className="footer"></Row>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
