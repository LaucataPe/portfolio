import MyName from './components/MyName'
import NavBar from './components/NavBar'
import './index.css'

//theme
import "primereact/resources/themes/lara-light-blue/theme.css";     
import 'primeicons/primeicons.css';
//core
import "primereact/resources/primereact.min.css";   
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <>
      <NavBar/>
      <MyName/>
      <Projects/>
      <Skills/>
    </>
  )
}

export default App
