import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


const ProjectSummary = ({props}) => {
    return (
      <div>
      <Box display='flex' flexDirection='row' justifyContent='stretch' ml='5%' mr='5%' pt='3%' pb='3%' borderColor='rgba(0, 0, 0, 0.12)' border={1} borderRight={0} borderLeft={0} >
        <Box display='flex' flexDirection='column' flex='4'> {props.title} <InsertDriveFileOutlinedIcon/></Box>
        <Box display='flex' flexDirection='row' flex='1' alignItems="center" justifyContent='space-between'>
          <Box borderColor="error.main" border={2} p='10px' borderRadius="borderRadius" fontSize={20}> {props.notes_cnt_danger}</Box>
          <Box  borderColor="warning.main" border={2} p='10px' borderRadius="borderRadius" fontSize={20}>{props.notes_cnt_warning}</Box>
          <Box  borderColor="success.main" border={2} p='10px' borderRadius="borderRadius" fontSize={20}>{props.notes_cnt_success}</Box>
        </Box>
      </Box>
      </div>
    );
};

export default ProjectSummary;