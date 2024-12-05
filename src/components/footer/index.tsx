import { UserContext } from "../../contexts/user"
import { useContext } from "react"
export function Footer(){
    const {qtdAlunos, novoAluno, naoAluno } = useContext(UserContext)
    return(
        <footer>
            <hr />
            <h3>Footer</h3>
            <h4>Alunos online na plataforma: {qtdAlunos}</h4>
            <button onClick={novoAluno}>Novo aluno</button>
            <button onClick={naoAluno}>Aluno saiu</button>
        </footer>
    )
}