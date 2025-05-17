import { getProjectName } from "./buildProjects";

const projectListData = {};

export const projectList = {
  addToProjectList: (projectObject) => projectListData[getProjectName(projectObject)] = projectObject,
  // deleteProject might not work have not tested it yet
  deleteProject: (projectToDelete) => delete projectListData[projectToDelete],
  getProjectList: () => { return projectListData },
  getProject: (name) => { return projectListData[name] },
};
