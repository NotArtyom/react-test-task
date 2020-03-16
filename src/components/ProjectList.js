import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
  return (
    <div className="Project-List">
      { projects && projects.map(project => {
        return (
          <ProjectSummary props={project} key={project.id}/>
        );
      }) }
    </div>
  );
};

export default ProjectList;