import React, {useState} from 'react';

//Componente = uma função que retorna um html, css ou javascript. APP é um componente.
//bloco isolado de html, css, js o qual nao interfere no restante da aplicação
//Estado = Informações mantida pelo componente (Imutabilidade)
//Propiedade = Atributos, podem ser pegos por parametros 
//fragment = uma tag sem nada <> </>
function App() {
  const [counter, setCounter] = useState(0);

  function incrementa(){
    setCounter(counter + 1);
  }
  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementa}>Incrementar</button>
    </>
  );
}

export default App;
