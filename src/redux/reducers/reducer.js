const initialState = {
  tasks: [
    {
      id: '123456',
      description: 'description 1',
      isDone: false
    }
  ],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'add':
      return { ...state, tasks: [...state.tasks,action.payload]}  
    default:
      return state;
  }
}

export default rootReducer