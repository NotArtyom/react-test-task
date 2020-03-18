import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import { Box, Button, Breadcrumbs } from '@material-ui/core';
import ProjectList from '../components/ProjectList';
import { connect } from 'react-redux';
import { getStructure } from '../store/actions/projectStructureAction';

class ProjectStructurePage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      children: null,
      project: this.props.location.state.project
    };
  }

  componentDidMount () {
      this.props.getStructure({projectId: this.state.project.id,root_structure_id: this.state.project.root_structure_id});
  }

  componentDidUpdate () {
    if (this.state.children == null) {
      this.setState({
        children: this.props.projectStructure.children
      });
    }
    console.log(this.state.children);
  }

  render () {
    return (
      <div>
        <header>
          <Navbar name={this.state.project.title} back='true'/>
          <Breadcrumbs>Структура</Breadcrumbs>
        </header>
        <main>
          <div className='main-container'>
            <ProjectList projects={this.state.children}/>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {projectStructure: state.projectStructure.projectStructure};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStructure: (payload) => dispatch(getStructure(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectStructurePage);