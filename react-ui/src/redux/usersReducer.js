const usersReducer = (state = {}, action) => {
  switch(action.type){
    case 'SET_USER': return { ...action.payload }
    case 'RESET_USER': return {}
    default: return {...state}
  }
}

export default usersReducer
