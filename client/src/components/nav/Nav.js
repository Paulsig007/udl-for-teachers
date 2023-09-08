import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Grid from "@mui/material/Grid";

function Nav() {
  return (
    <Grid container className={styles.navTabs}>
      <Grid item xs={3}>
      <Link to={"/"} className={styles.navItem}>
        Home
      </Link>
      </Grid>
      <Grid item xs={3}>
      <Link to={"/about"} className={styles.navItem}>
        About
      </Link>
      </Grid>
      <Grid item xs={3}>
      <Link to={"/contact"} className={styles.navItem}>
        Contact
      </Link>
      </Grid>
      <Grid item xs={3}>
      <Link to={"/additional-reading"} className={styles.navItem}>
        Additional Reading
      </Link>
      </Grid>
    </Grid>
  );
}

export default Nav;
