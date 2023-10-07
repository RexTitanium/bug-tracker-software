import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id: 2323213,
        name: "Crash on Load",
        details:"Crashes after 3 sec",
        steps:"Open Application and it will crash",
        version:"V2.0",
        assigned:"Samyak Shah",
        creator: "XYZ Blabla",
        priority: 1,
        type:2,
        status:2,
        time: "13:04",
    }))
    data.push(new bugModel({
        _id: 1353613,
        name: "Crash on Save",
        details:"Crashes after hit save",
        steps:"Save Application and it will crash",
        version:"V2.0",
        assigned:"Samyak Shah",
        creator: "XYZ Blabla",
        priority: 4,
        type:2,
        status:3,
        time: "13:06",
    }))

    data.push(new bugModel({
        _id: 1253613,
        name: "Refresh on Save",
        details:"Crashes after hit save",
        steps:"Save Application and it will crash",
        version:"V2.0",
        assigned:"Samyak Shah",
        creator: "XYZ Blabla",
        priority: 1,
        type:1,
        status:1,
        time: "13:06",
    }))

    data.push(new bugModel({
        _id: 1353612,
        name: "Crash on Click",
        details:"Crashes after hit save",
        steps:"Save Application and it will crash",
        version:"V2.0",
        assigned:"Samyak Shah",
        creator: "XYZ Blabla",
        priority: 2,
        type:1,
        status:1,
        time: "13:06",
    }))
    data.push(new bugModel({
        _id: 1356613,
        name: "Crash on Save",
        details:"Crashes after hit save",
        steps:"Save Application and it will crash",
        version:"V2.0",
        assigned:"Samyak Shah",
        creator: "XYZ Blabla",
        priority: 3,
        type:3,
        status:3,
        time: "13:06",
    }))

    let sorted = data.sort((a,b) => {return a.priority - b.priority})
    return sorted
}