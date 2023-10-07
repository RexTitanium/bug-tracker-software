function ProjectModel(project) {
    if (project !== undefined){
        this._id = project._id;
        this.name = project.name;
        this.details = project.details;
        this.version = project.version;
        this.bugs = project.bugs;
        this.assigned = project.assigned;
        this.creator = project.creator;
        this.time = project.time; 
    }
}

export default ProjectModel