import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects,extra}) => {
  return (
    <div className="Project-List">
      { projects && projects.map(project => {
        return (
          <ProjectSummary project={project} key={project.id} structure={project.city} extra={extra}/>
        );
      }) }
    </div>
  );
};

export default ProjectList;