export const setUser = (user) => {
  return { type: 'SET_USER', payload: user}
}

export const resetUser = () => {
  return { type: 'RESET_USER' }
}
