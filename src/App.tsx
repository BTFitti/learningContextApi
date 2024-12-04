import { useState } from "react"
import { Alunos } from "./components/alunos"
export function App() {
  const [nome, setNome] = useState("Dev Fitti")
  return (
    <div>
      <h1>Escola DEV</h1>
      <br/>
      <hr/>
      {/* componente de alunos */}
      <Alunos changeName={(name: string)=> setNome(name)} alunoNome={nome} />
    </div>
  )
}

export default App
