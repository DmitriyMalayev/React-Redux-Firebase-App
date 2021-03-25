import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return <ProjectSummary key={project.id} project={project} />;
        })}
    </div>
  );
};
export default ProjectList;

/*
If we want to render a component that's defined in another file we have to import it.
If props are passed in as children from a parent, we don't need to import the parent from the child.
We are receiving props from < ProjectList projects = { projects } /> located in Dashboard.js
A child can't render its parent. 


    <div className="project-list section">
      {projects && projects.map((project) => {
        If we have projects invoke projects.map. If we don't have it skip it because there isn't anything to output. 
        We are returning a project summary for each individual project. We are passing down as a prop each  individual project. 


          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>




*/
