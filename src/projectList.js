const projectListData = {};

export const projectList = {
    addToProjectList: (projectObject) => projectListData[projectObject.getProjectName()] = projectObject,
    deleteProject: (projectToDelete) => delete projectListData[projectToDelete],
    getProjectList: () => { return projectListData },
    getProject: (name) => { return projectListData[name] },
    printProjectList: () => console.log(projectListData),
};
