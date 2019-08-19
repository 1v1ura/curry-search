import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

// pages
import Home from "../Home";
import Shop from "../../containers/Shop";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Box mb={3}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" component="h1" color="inherit">
                カレー屋さんを探すアプリ
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Container maxWidth="xl">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:shop_id/info" component={Shop} />
            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </>
  );
};

export default App;
