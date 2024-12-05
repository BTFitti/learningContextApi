//importando o contexto que criamos que contém as informações
import { UserContext } from "../../contexts/user"
//hook do react para consumir um contexto
import { useContext } from "react"
export function Nome(){
    //consumindo o contexto
    //Dentro das chaves se eu der um ctrl + space eu posso ver oque eu posso pegar
    const {aluno, mudaNome} = useContext(UserContext)
    return(
        <div>
           <strong>Aluno (do componente Nome): {aluno} </strong>
            {/* Ao clicar no botão, ele vai lá no UserContext e muda o setNome para Sofia e toda a aplicação sofre essa alteração */}
           <button onClick={()=> mudaNome("Sofia")}>Mudar nome</button>
           <br/>
        </div>
    )
}