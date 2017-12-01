const loadState = () => {
  try {
    const serializedState = localStorage.getItem('token')
    if (serializedState === null) return undefined
    return {
      login: { token: serializedState },
    }
  } catch (err) {
    return undefined
  }
}

const saveState = (token) => {
  try {
    localStorage.setItem('token', token)
  } catch (err) {
    // ignore
  }
}

export default { loadState, saveState }
