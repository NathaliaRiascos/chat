export const loadState = (state: string) => {
  try {
    const serializedState = localStorage.getItem(state)

    if (serializedState === null) {
      return undefined
    }
    const storageState = JSON.parse(serializedState)

    return storageState
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: string, stateToSave: object) => {
  try {
    const serializedState = JSON.stringify(stateToSave)
    // saves state to localStorage
    localStorage.setItem(state, serializedState)
  } catch (err) {
    console.log('error and unable to save state', err)
  }
}
