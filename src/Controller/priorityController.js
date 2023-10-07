const colors = ["#ff2700","#dbc724","#32cd57"]

function PriorityController(priority) {
    const level = ["High", "Medium", "Low"]
    return{
        level:(level[priority-1]),
        color:(colors[priority-1])
    }
}

export default PriorityController