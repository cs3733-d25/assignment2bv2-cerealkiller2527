import './App.css'
import Title from './components/title.tsx'
import Intro from './components/intro.tsx'
import Ukulele from './components/ukulele.tsx'
import Gaming from './components/gaming.tsx'

function App() {
  return (
    <div className="App">
      <Title />
      <Intro name1="Madhav Lodha" name2="Alejandro Lazaro Laredo" />
      <Ukulele />
      <Gaming />
    </div>
  )
}

export default App
