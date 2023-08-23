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
import About from "./pages/home/about/About";
import Contact from "./pages/home/contact/Contact";
import AdditionalReading from "./pages/home/additionalReading/AdditionalReading";

// components
import Nav from "./components/nav/Nav";

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
            <Col>
              <h1>Logo</h1>
            </Col>
            <Col id="header">
              <h1>UDL for Teachers</h1>
            </Col>
            <Col id="nav">
              <Nav />
            </Col>
          </Row>
          <Row className="main">
            <Col>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/additional-reading"
                  element={<AdditionalReading />}
                />
              </Routes>
            </Col>
          </Row>
          <Row className="footer"></Row>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
