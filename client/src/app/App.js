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
import Grid from "@mui/material/Grid";
import styles from "./App.module.css";

// pages
import Home from "../pages/home/home/Home";
import About from "../pages/home/about/About";
import Contact from "../pages/home/contact/Contact";
import AdditionalReading from "../pages/home/additionalReading/AdditionalReading";

// components
import Nav from "../components/nav/Nav";

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
        <Container maxWidth='xl'>
          <Grid container spacing={2}>
          <Grid className={styles.headerRow}>
            {/* Header will contain Head of site, logo, Home, About, Contact, Additional Reading */}
              <h1>Logo</h1>
          </Grid>
          <Grid>
              <h1 className={styles.header}>UDL for Teachers</h1>
          </Grid>
          <Grid>
              <Nav />
          </Grid>
          <Grid>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/additional-reading"
                  element={<AdditionalReading />}
                />
              </Routes>
          </Grid>
          <Grid>
              <p>footer</p>
          </Grid>
          </Grid>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;

