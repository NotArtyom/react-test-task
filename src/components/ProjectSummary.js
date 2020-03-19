import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined'; // Файлик
import MoreVertIcon from '@material-ui/icons/MoreVert'; // Три точки
import NavigateNextIcon from '@material-ui/icons/NavigateNext'; // Стрелочка вправо
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'; // Trash bin
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
            <Box display='flex' flexDirection='column' flex='4'> <Box mb='20px' fontSize={ 15 }>{ this.props.project.title }</Box>
              {this.props.extra ? <InsertDriveFileOutlinedIcon/> : ""}
            </Box>
            <Box display='flex' flexDirection='row' flex='1' alignItems="center" justifyContent='space-between'>
              <Box display='flex' flex='2' alignItems="center" justifyContent='space-between'>
              <Box borderColor="error.main" border={ 1 } p='10px' borderRadius="borderRadius"
                   fontSize={ 15 } mr='2px'> { this.props.project.notes_cnt_danger }</Box>
              <Box borderColor="warning.main" border={ 1 } p='10px' borderRadius="borderRadius"
                   fontSize={ 15 } mr='2px'>{ this.props.project.notes_cnt_warning }</Box>
              <Box borderColor="success.main" border={ 1 } p='10px' borderRadius="borderRadius"
                   fontSize={ 15 }mr='2px' >{ this.props.project.notes_cnt_success }</Box>
              <NavigateNextIcon onClick={ this.handleClick } cursor='pointer'/>
              </Box>
                {this.props.extra ?<Box display='flex' justifyContent='flex-end' flex='1'><DeleteOutlineIcon color='error'/></Box> : ""}
            </Box>
          </Box>
        </Box>
      );
  }
}

export default ProjectSummary;