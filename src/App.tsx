import { Footer } from "./components/footer"
import { Alunos } from "./components/alunos"
import UserProvider from "./contexts/user"

export function App() {
  return (
    //Envolvendo o provider em volta da aplicação
    <UserProvider>
      <div>
      <h1>Escola DEV</h1>
      <br/>
      <hr/>
      {/* componente de alunos */}
      <Alunos />
      <Footer/>
    </div>
    </UserProvider>
    
  )
}

export default App
