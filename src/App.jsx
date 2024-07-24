import routes from './routes/index'
import Navbar from './components/containers/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
     {routes}
    </>
  )
}

export default App
