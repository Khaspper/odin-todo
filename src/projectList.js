export const projectList = (() => {
  const projectList = {};

  function printProjectList() {
    console.log(projectList);
  }

  return {
    addToProjectList: (projectObject) => projectList[projectObject.getProjectName()] = projectObject,
    deleteProject: (projectToDelete) => delete projectList[projectToDelete],
    getProjectList: () => { return projectList },
    getProject: (name) => { return projectList[name] },
    printProjectList
  };
})();

//! You're repeating names across files change them!!!!