import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import SideDrawer from "./SideDrawer";
import {Link,NavLink} from "react-router-dom";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `Leaderboard`, path: `/Leaderboard`},
  { title: `problemlist`, path: `/problemlist` },
  { title: `Compiler`, path: `/compiler` },
  { title: `Sign Up`, path: `/signup` },
  { title: `Sign In`, path: `/signin` },
  
 
 
 
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container  className={classes.navbarDisplayFlex}>
         <Link to="/"> <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton></Link>
          <Hidden smDown>
            <List className="header"
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
