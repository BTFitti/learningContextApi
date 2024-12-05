import { useState } from "react"
import { Alunos } from "./components/alunos"
import UserProvider from "./contexts/user"
export function App() {
  return (
    <UserProvider>
      <div>
      <h1>Escola DEV</h1>
      <br/>
      <hr/>
      {/* componente de alunos */}
      <Alunos />
    </div>
    </UserProvider>
    
  )
}

export default App
