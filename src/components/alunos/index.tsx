import { Nome } from "../Nome";
import { UserContext } from "../../contexts/user";
import { useContext } from "react";
export function Alunos() {
  const { qtdAlunos } = useContext(UserContext);
  return (
    <div>
      <h3>Quantidade de alunos (do componente alunos):{qtdAlunos}</h3>
      <br />
      <Nome />
    </div>
  );
}
