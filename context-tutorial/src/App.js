import React from 'react'
import { ThemeContext } from './theme-context'

function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext)

  return (
    <div  style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >
        <button
          type="button"
          onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color
          }}
        >
          Toggle to {!dark ? 'Dark' : 'Light'} theme
        </button>

        
       
   
    </div>
  )
}

export default App
