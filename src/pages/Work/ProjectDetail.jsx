import { useParams } from "react-router-dom";

import {
  allProjects,
} from "../../data/projects";

import ProjectTemplate
  from "../../templates/ProjectTemplate/ProjectTemplate";


import NotFound
  from "../NotFound/NotFound";

function ProjectDetail() {

  const {
    projectSlug,
  } = useParams();


  const project = allProjects.find(
    (item) =>
      item.projectSlug === projectSlug
  );

    if (!project) {
    return <NotFound />;
  }


  return (
    <ProjectTemplate
      project={project}
    />
  );
}


export default ProjectDetail;