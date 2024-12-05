import { ReactNode, createContext, useState } from "react";
type UserContextData = {
    aluno: string;
    qtdAlunos: number;
    mudaNome: (nome: string)=> void;
}
interface UserProviderProps{
    children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);
//Criando o provider que vai envolver a aplicação
function UserProvider({children}: UserProviderProps){

    function mudaNome(nome: string){
        setAluno(nome);
    }

    const [aluno, setAluno] = useState("Bruno Fitti")
    const [qtdAlunos, setQtdAluno] = useState(40)
    return(
        //Esse provider vai renderizar as rotas
       <UserContext.Provider value={{aluno, qtdAlunos, mudaNome}}>
         {children}
       </UserContext.Provider>
    )
}

export default UserProvider;