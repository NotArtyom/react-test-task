import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import { connect } from 'react-redux';
import LoginPage from '../routes/LoginPage';
import { Container, Box, Button, Breadcrumbs } from '@material-ui/core';
import { getProject } from '../store/actions/projectActions';
import ProjectList from '../components/ProjectList';

const mapStateToProps = state => {
  return {project: state.project.projects};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: () => dispatch(getProject())
  };
};

class ProjectPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  componentDidMount () {
    this.props.getProject();
  }

  componentDidUpdate () {
    if (this.state.data == null) {
      this.setState({
        data: this.props.project
      });
    }
    console.log(this.state.data);
  }


  render () {
    return (
      <div>
        <header>
          <Navbar name="Проекты"/>
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
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
