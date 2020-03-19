import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  return (
    <div className="Project-List">
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} structure={project.city}/>
        );
      }) }
    </div>
  );
};

export default ProjectList;