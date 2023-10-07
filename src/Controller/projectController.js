import ProjectModel from '../Models/projectModel'

export function retrieveProject(){
    let data = [];
    data.push(new ProjectModel({
        _id:1,
        name:'Titanium Arts',
        details: 'My Own Website',
        version: 'v2.0',
        bugs: [{
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
            },
            {
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
            }],
        assigned: ['Samyak Shah','XYZ BlaBla'],
        creator: ['Samyak Shah'],
        time: '13:05'
    }))
    data.push(new ProjectModel({
        _id:1,
        name:'Plant Health Monitor',
        details: 'Monitoring Plant Health',
        version: 'v1.0',
        bugs: [{
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
            },
            {
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
            }],
        assigned: ['Samyak Shah','XYZ BlaBla'],
        creator: ['Samyak Shah'],
        time: '13:05'
    }))
    return data
}