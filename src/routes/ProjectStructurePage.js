import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import { Box, Button, Breadcrumbs } from '@material-ui/core';
import ProjectList from '../components/ProjectList';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { getStructure } from '../store/actions/projectStructureAction';
import { getChildren } from '../store/actions/projectStructureAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined'; // Структура
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined'; // Файлик
import NewReleasesOutlinedIcon from '@material-ui/icons/NewReleasesOutlined'; // Воскл Знак
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'; // Люди
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined'; // Stonks
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'; // Настройки

class ProjectStructurePage extends Component {

  constructor (props) {
    super(props);
    this.state = {
      projReq: false,
      childrenReq: false,
      children: null,
      project: this.props.location.state.project
    };
  }

  componentDidMount () {
    this.props.getStructure({
      projectId: this.state.project.id,
      root_structure_id: this.state.project.root_structure_id
    });
    // this.setState({
    //   projReq: false,
    //   childrenReq: false
    // });
    }

  componentDidUpdate () {
    if (this.state.children == null && this.props.projectStructure.fetched && !this.props.projectStructure.fetching) {
      this.setState({
        children: this.props.projectStructure.projectStructure.children
      });
      console.log(this.props.projectStructure.projectStructure.children)
    }

     if (this.state.project.project_id && !this.props.childrenReceiver.fetched && !this.props.childrenReceiver.fetching && !this.state.childrenReq) {
         this.props.getChildren({
        projectId: this.state.project.project_id,
        structureId: this.state.project.id
      });
    }

       if (!this.state.childrenReq && this.props.childrenReceiver.fetched && !this.props.childrenReceiver.fetching) {
         this.setState(prevState => ({
           childrenReq: !prevState.childrenReq,
           //projReq: false,
           children: this.props.childrenReceiver.children.children
         }));
       }
  }

  render () {
    return (
      <div>
        <header>
          <Navbar name={ this.state.project.title } back='true'/>
          <Box border={ 1 } borderColor='rgba(0, 0, 0, 0.12)' borderRight={ 0 } borderLeft={ 0 }>
            <BottomNavigation>
              <BottomNavigationAction label="Структура" value="Структура" icon={ <AccountTreeOutlinedIcon/> }/>
              <BottomNavigationAction label="Favorites" icon={ <InsertDriveFileOutlinedIcon/> }/>
              <BottomNavigationAction label="Nearby" icon={ <NewReleasesOutlinedIcon/> }/>
              <BottomNavigationAction label="Nearby" icon={ <PeopleAltOutlinedIcon/> }/>
              <BottomNavigationAction label="Nearby" icon={ <ShowChartOutlinedIcon/> }/>
              <BottomNavigationAction label="Nearby" icon={ <SettingsOutlinedIcon/> }/>
            </BottomNavigation>
          </Box>
          <Box borderColor='rgba(0, 0, 0, 0.12)' borderBottom={ 1 } borderRight={ 0 } borderLeft={ 0 }>
            <Box ml='5%' mr='5%' mt='30px' mb='30px' fontFamily='Ubuntu' fontSize={ 15 }>
              { this.state.project.title }
            </Box>
          </Box>
        </header>
        <main>
          <div className='main-container'>
            <Box display='flex' justifyContent='flex-start' ml='5%' mr='5%' mt='30px' mb='20px'>
              <Box display='flex' flex='8'>
                <Fab color="primary" size="medium" aria-label="add" flex>
                  <AddIcon/>
                </Fab>
              </Box>
              <Box display='flex' justifyContent='flex-end' flex='3' mb='30px' alignItems='flex-end'>
                <SearchIcon/>
                <TextField fullWidth id="outlined-basic" label="Search..."/>
              </Box>
            </Box>
            <ProjectList projects={this.state.children} extra={true} />
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {projectStructure: state.projectStructure, childrenReceiver: state.children};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStructure: (payload) => dispatch(getStructure(payload)),
    getChildren: (payload) => dispatch(getChildren(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectStructurePage);
