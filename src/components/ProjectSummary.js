import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert'; // Три точки
import NavigateNextIcon from '@material-ui/icons/NavigateNext'; // Стрелочка вправо
import { history } from '../helpers/history';

class ProjectSummary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
    console.log(this.props.project);
    history.push('/Project', {project: this.props.project});
  };

  render () {
    return (
      <Box>
        <Box display='flex' flexDirection='row' justifyContent='stretch' ml='5%' mr='5%' pt='3%' pb='3%'
             borderColor='rgba(0, 0, 0, 0.12)' border={ 1 } borderRight={ 0 } borderLeft={ 0 } fontFamily='Ubuntu'>
          <Box display='flex' alignItems='center' mr='20px'>
            <MoreVertIcon/>
          </Box>
          <Box display='flex' flexDirection='column' flex='4'> <Box mb='20px'
                                                                    fontSize={ 15 }>{ this.props.project.title }</Box> {/*<InsertDriveFileOutlinedIcon/>*/ }
          </Box>
          <Box display='flex' flexDirection='row' flex='1' alignItems="center" justifyContent='space-between'>
            <Box borderColor="error.main" border={ 2 } p='10px' borderRadius="borderRadius"
                 fontSize={ 15 }> { this.props.project.notes_cnt_danger }</Box>
            <Box borderColor="warning.main" border={ 2 } p='10px' borderRadius="borderRadius"
                 fontSize={ 15 }>{ this.props.project.notes_cnt_warning }</Box>
            <Box borderColor="success.main" border={ 2 } p='10px' borderRadius="borderRadius"
                 fontSize={ 15 }>{ this.props.project.notes_cnt_success }</Box>
            <NavigateNextIcon onClick={ this.handleClick } cursor='pointer'/>
          </Box>
        </Box>
      </Box>
    );
  };
}

export default ProjectSummary;