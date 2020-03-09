import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';


const ProjectSummary = (project) => {
    return (
      <div>
      <Box display='flex' flexDirection='row' justifyContent='stretch' ml='5%' mr='5%' pt='3%' pb='3%' borderColor='rgba(0, 0, 0, 0.12)' border={1} borderRight={0} borderLeft={0} >
        <Box display='flex' flexDirection='column' flex='4'> Project <InsertDriveFileOutlinedIcon/></Box>
        <Box display='flex' flexDirection='row' flex='1' alignItems="center" justifyContent='space-between'>
          <Box borderColor="secondary.main" border={2} p='10px' borderRadius="borderRadius" fontSize={20}>10</Box>
          <Box  borderColor="error.main" border={2} p='10px' borderRadius="borderRadius" fontSize={20}>5</Box>
          <Box  borderColor="success.main" border={2} p='10px' borderRadius="borderRadius" fontSize={20}>0</Box>
        </Box>
      </Box>
      </div>
    );
};

export default ProjectSummary;