import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import { Box, Button, Breadcrumbs } from '@material-ui/core';
import ProjectList from '../components/ProjectList';

class ProjectStructurePage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      children: null,
      //project: location.state
    };
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <header>
          <Navbar name='Name' back='true'/>
          <Breadcrumbs></Breadcrumbs>
        </header>
        <main>
          <div className='main-container'>
            <Box display="flex" justifyContent="flex-end" mt='3%' mr='3%' mb='30px'>
              <Button variant="outlined" color='primary' size="medium"> Добавить проект </Button>
            </Box>
            <ProjectList projects={this.state.data}/>
          </div>
        </main>
      </div>
    );
  }
}


export default ProjectStructurePage;