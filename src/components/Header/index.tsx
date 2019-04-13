import React from 'react';
import { makeStyles } from "@material-ui/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import logo from '../../pokedex.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '10px'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  img: {
    maxWidth: '48px'
  }
}));

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Link to="/">
              <img className={classes.img} src={logo}/>
            </Link>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
