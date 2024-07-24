import routes from './routes/index'
import Navbar from './components/containers/navbar/Navbar'
import './styles/Styles.css'

function App() {

  return (
    <>
      <Navbar />
     {routes}
    </>
  )
}

export default App
