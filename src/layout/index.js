import React from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import { connect } from 'react-redux';
import LoginPage from '../routes/LoginPage';
import { Applist } from '../components/List';



 const Layout = props => {

  return(
    <div>
      <header>
        <LoginPage/>
      {/*  /!*<Navbar name={props.name}/>*!/*/}
       </header>

      {/*<main>*/}
      {/*  <div className='main-container'>*/}
          {/*<Applist projects={this.props.projects}/>*/}
        {/*</div>*/}
      {/*</main>*/}
    </div>
  )
};


 export default (Layout);
