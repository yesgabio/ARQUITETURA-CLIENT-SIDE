import './App.css'
import { AloMundo } from './components/AloMundo'
import { AloMundoColorido } from './components/AloMundoColorido'
import { MeuBotao } from './components/MeuBotao'
import { Contador } from './components/Contador'
import { NovoContador } from './components/NovoContador'
import { Relogio } from './components/Relogio'
import { UncontrolledForm } from './components/UncontrolledForm'
import { ControlledForm } from './components/ControlledForm'

function App() {

  return (
   <>
   <AloMundo />
   <AloMundoColorido nome="Gabriela" cor="red"/>
   <MeuBotao />
   <br />
   <Contador />
   <hr />
   <NovoContador />
   <hr />
   <Relogio />
   <hr />
   <UncontrolledForm />
   <hr />
   <ControlledForm />
   </>
  )
}

export default App
