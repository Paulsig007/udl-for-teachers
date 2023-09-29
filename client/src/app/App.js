import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import Container from "@mui/material/Container";
import styles from "./App.module.css";

// pages
import Home from "../pages/home/home/Home";
import About from "../pages/home/about/About";
import Contact from "../pages/home/contact/Contact";
import AdditionalReading from "../pages/home/additionalReading/AdditionalReading";
// import Perception from "../pages/guideline/Perception";
import Guideline from "../pages/guideline/Guideline";

// components
import Header from "../components/Header/Header";

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
        <Container maxWidth="xl">
          <div container spacing={2}>
            <div>
              <Header />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/additional-reading"
                  element={<AdditionalReading />}
                />
                <Route
                  path="/guideline/:currGuideline"
                  element={<Guideline />}
                />
              </Routes>
            </div>
            <div>
              <p>footer</p>
            </div>
          </div>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
