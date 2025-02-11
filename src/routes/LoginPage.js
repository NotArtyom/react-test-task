import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import { signIn }  from '../store/actions/authAction';
import { connect } from 'react-redux';

class LoginPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.setState({submitted: true});
    const {email, password} = this.state;
    console.log(this.props);
    if (email && password) {
      this.props.signIn({login: email, pass: password});
    }
  }

  render () {
    const {username, password} = this.state;
    return (
      <Box mt='10%'>
       <div className="col-md-6 col-md-offset-3" >
         <Container component="main" maxWidth="xs">
           <CssBaseline/>
          <Box display='flex' justifyContent='center'>
           <div className={ classes.paper }>
             <Box display='flex' justifyContent='center'>
               <Box mr='10px'>
               <Avatar className={ classes.avatar }>
              <LockOutlinedIcon/>
              </Avatar>
               </Box>
               <Box display='flex' alignItems='center'>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
               </Box>
             </Box>
            <form className={ classes.form } noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={ username }
                onChange={ this.handleChange }
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={ password }
                onChange={ this.handleChange }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={ classes.submit }
                onClick={ this.handleSubmit }
              >
                Sign In
              </Button>
            </form>
          </div>
          </Box>
        </Container>
       </div>
      </Box>
    );
  }
}

const classes = makeStyles(theme => ({
  paper: {

    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    display:'flex',
    alignItems: 'center',
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapStateToProps = state => {
  return {auth: state.auth}
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (payload) => dispatch(signIn(payload))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);