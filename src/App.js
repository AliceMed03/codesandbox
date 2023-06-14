import "./styles.css";
import { Fragment, useState } from "react";

//Declarando as constantes
const App = () => {
  const [alunos, setAlunos] = useState(["Ana", "Carlos", "João", "Maria"]);
  //O useState declara uma variável e mantém seu conteudo quando seu
  //conteudo for alterado em qualquer função do componente a página é
  //atualizada
  const [atendido, setAtendido] = useState("");
  const [nome, setNome] = useState("");

  //Declaração da função novoAluno
  const novoAluno = (e) => {
    e.preventDefault();
    //set alunos é um método que insere um nome na última posição do vetor
    //de alunos
    setAlunos([...alunos, nome]);
    //Apaga o nome do aluno digitado
    setNome("");
  };

  //Declaração da função novoUrgente
  const novoUrgente = () => {
    setAlunos([nome, ...alunos]);
    //Apaga o nome do aluno digitado
    setNome("");
  };

  //Declaração da função novoAtender
  const novoAtender = () => {
    if (!alunos.length) {
      alert("Não há alunos na fila de espera...");
      return;
    }
    setAtendido([alunos[0]]);
    //função slice 1 elimina o primeiro elemento do array
    setAlunos(alunos.slice(1));
    //Apaga o nome do aluno digitado
    setNome("");
  };

  return (
    <Fragment>
      <h1>Escola de Tecnologia</h1>
      <form onSubmit={novoAluno}>
        <p>
          Aluno:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input type="submit" value="Adicionar" />
          <input
            type="button"
            id="btnUrgencia"
            value="urgência"
            onClick={novoUrgente}
          />
          <input
            type="button"
            id="btnAtender"
            value="Atender"
            onClick={novoAtender}
          />
        </p>
      </form>

      <h3>
        Em atendimento:
        <span className="fonte-azul">{atendido}</span>
      </h3>
      <pre>{alunos.map((aluno) => aluno + "\n")}</pre>
    </Fragment>
  );
};

export default App;
