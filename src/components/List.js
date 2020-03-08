import React from 'react';
import { List } from '@material-ui/core';
import ProjectSummary from '../components/ProjectSummary';

export const Applist = ({projects}) => {
  return (
    <List>
      {projects && projects.map(project => {
        return(
          <ProjectSummary project={project} key={project.id}/>
        )
      })}
    </List>
  );
};