import { Nome } from "../Nome";
import { UserContext } from "../../contexts/user";
import { useContext } from "react";
export function Alunos(){
    const {qtdAlunos, mudaNome} = useContext(UserContext)
    return(
        <div>
            <h3>Quantidade de alunos:{qtdAlunos}</h3>
            <button onClick={()=> mudaNome("Sofia")}>Mudar nome para sofia</button>
            <br/>
            <Nome />
        </div>
    )
}