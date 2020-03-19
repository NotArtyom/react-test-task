import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { history } from '../helpers/history';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  if (props.back) {
    return (
      <div className={ classes.root }>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" className={ classes.title }>
            <Box display='flex' alignItems='center' flexDirection='row'>
              <ArrowBackIcon onClick={()=> {history.goBack()}} cursor='pointer'/>
              <Box ml='10px'>
              {/*{ props.number }*/}
              { props.name }
              </Box>
            </Box>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  else{
    return (
      <div className={ classes.root }>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" className={ classes.title }>

              { props.number }
              { props.name }
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}