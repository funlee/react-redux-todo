const initialTask = [
	{
		task: 'Ues Redux',
		completed: false,
		id: 0
	}
]

export default function tasks(state = initialTask, action ) {
	switch(action.type) {
		case 'ADD_TASK':
			return [
				...state,
				{
					task: action.text,
					completed: false,
					id: state.reduce((maxId, task) => Math.max(task.id, maxId), -1) + 1
				}
			]
		case 'DELETE_TASK':
			return state.filter(task => 
				task.id !== action.id
			)
		case 'COMPLETE_TASK':
			return state.map(task =>
				task.id === action.is ? { ...task, completed: !task.completed } : task
			)
	}
}