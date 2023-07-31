import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

import { useState } from 'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("")

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3>Generate SQL with AI</h3>

      <form>
        <input 
          type="text"
          nane="query-description"
          placeholder="Describe your query"
          onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate query"/>
      </form>
    </main>
  )
}

export default App
