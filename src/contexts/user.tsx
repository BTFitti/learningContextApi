import { ReactNode, createContext, useState } from "react";
type UserContextData = {
    aluno: string;
    qtdAlunos: number;
    //como nao damos return na função passamos o retorno void, passamos os parâmetros da função apenas.
    mudaNome: (nome: string)=> void;
    novoAluno: () =>  void;
    naoAluno: () => void;
}
interface UserProviderProps{
    children: ReactNode;
}

//Criando o contexto, dentro do createContext eu passo o valor inicial, passando somente createContext({}) assim, nossa aplicação não vai saber oque o nosso contexto vai ter
//Então é interessante tipar esse contexto (linha 2).
//Fazendo a tipagem nos sabemos quais propriedades poderemos exportar que nesse caso vai ser um string, um number e uma função que retorna void mas recebe uma string
export const UserContext = createContext({} as UserContextData);


//Criando o provider que vai envolver a aplicação.
//Como estamos repassando um children Ali no UserContext.Provider, precisamos passar ele aqui no UserProvider e criamos uma tipagem do que é esse children
//E passamos que ele é do tipo ReactNode essa tipagem quer dizer que eu estou garantindo que meu componente aceite qualquer conteúdo que possa ser renderizado em React.
function UserProvider({children}: UserProviderProps){

    //Essa função recebe um parâmetro nome e dá um setAluno na useState com o nome passado
    function mudaNome(nome: string){
        setAluno(nome);
    }
    function novoAluno(){
        setQtdAluno(alunos => alunos+1)
    }
    function naoAluno(){
        setQtdAluno(alunos => alunos -1)
    }

    const [aluno, setAluno] = useState("Bruno Fitti")
    const [qtdAlunos, setQtdAluno] = useState(40)
    return(
        //Esse provider vai renderizar as rotas, como vamos renderizar nossos componentes passamos que dentro dele vamos renderizar um {children}
        //Dentro dele é a nossa aplicação.
        //Esse UserContext.Provider precisa receber uma propriedade chamada value que é o que o componente pode exportar para os componentes filhos.
        //No caso temos que passar o aluno, qtdAlunos e a função mudaNome, mas porque? porque o UserContext segue a tipagem que criamos
       <UserContext.Provider value={{aluno, qtdAlunos, mudaNome, novoAluno, naoAluno}}>
         {children}
       </UserContext.Provider>
    )
}

export default UserProvider;