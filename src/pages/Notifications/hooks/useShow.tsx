import { useState } from 'react'

export const useShow = (initialState: number, data: []) => {
  const [ visible, setVisible ] = useState(initialState)
    const [ showAll, hideAll ] = useState(false)
  
    const handleVisible = () => { 
      if (!showAll)
        setVisible(data.length - 1)
      else
        setVisible(initialState)
      hideAll(!showAll)
    }

    const newData =  data?.slice(0, visible)

  return {
    newData,
    showAll,
    handleVisible
  }
}
