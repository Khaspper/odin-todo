export const projectList = (() => {
  const projectList = {};

  function printProjectList() {
    console.log(projectList);
  }

  return {
    addToProjectList: (projectObject) => projectList[projectObject.getProjectName()] = projectObject,
    deleteProject: (projectToDelete) => delete projectList[projectToDelete],
    printProjectList
  };
})();
