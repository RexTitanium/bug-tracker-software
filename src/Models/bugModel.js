function BugModel(bug) {
    if (bug !== undefined){
        this._id = bug._id;
        this.name = bug.name;
        this.details = bug.details;
        this.steps = bug.steps;
        this.version = bug.version;
        this.priority = bug.priority;
        this.assigned = bug.assigned;
        this.creator = bug.creator;
        this.type = bug.type;
        this.status = bug.status;
        this.time = bug.time; 
    }
}

export default BugModel