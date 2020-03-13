import React from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import { connect } from 'react-redux';
import LoginPage from '../routes/LoginPage';
import { Applist } from '../components/List';
import { Container, Box, Button, Breadcrumbs } from '@material-ui/core';



const Project = props => {

  return(
    <div>
      <header>
        <Navbar name="Проекты"/>
        {/*<Breadcrumbs></Breadcrumbs>*/}
      </header>

      <main>
        <div className='main-container'>
          <Box display="flex" justifyContent="flex-end" mt='3%' mr='3%' mb='30px'>
            <Button  variant="outlined" color='primary' size="medium"> Добавить проект </Button>
          </Box>
          <Applist/>
        </div>
      </main>
    </div>
  )
};


export default (Project);
