const loadState = () => {
  try {
    const serializedState = localStorage.getItem('login')
    if (serializedState === null) return undefined
    return {
      login: JSON.parse(serializedState),
    }
  } catch (err) {
    return undefined
  }
}

const saveState = (token, id) => {
  try {
    localStorage.setItem('login', JSON.stringify({ token, id }))
  } catch (err) {
    // ignore
  }
}

export default { loadState, saveState }
