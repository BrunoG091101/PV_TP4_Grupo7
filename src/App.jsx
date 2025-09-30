import './App.css'
import Numero from './assets/componentes/numero'
import Validar from './assets/componentes/Validar'
import Saludo from './assets/componentes/saludo'
import Botones from './assets/componentes/Botones'

function App() {
  let numeroMax=100;
  let numeroMin=1;
  let random=Numero(numeroMin,numeroMax);

  return (
    <>
      <Saludo/>
      <Validar random={random}/>
      <Botones/>
    </>
  )
}

export default App
