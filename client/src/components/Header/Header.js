import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./Header.module.css";
import logo from "../../assets/images/udl-for-teachers-logo.png";

// components
import Nav from "../nav/Nav";

function Header() {
    return (
      <Container maxWidth='xl'>
        <Grid container spacing={2} className={styles.header}>
          <Grid item sm={12} md={3}>
            <img
              className={styles.logo}
              src= {logo}
              alt="UDL for Teachers logo"
            />
          </Grid>
          <Grid item sm={12} md={9}>
            <h1 className={styles.headerText}>UDL for Teachers</h1>
          </Grid>
          <Grid item sm={12}>
            <Nav className={styles.navTabs} />
          </Grid>
        </Grid>
      </Container>
    )
}

export default Header