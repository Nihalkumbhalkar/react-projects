import './App.css'
import Cards from './components/Cards'

function App() {
  


  return (
    <>  
    <h1 className='bg-green-700 text-white p-6 rounded-xl'>Tailwind Test</h1>
      <Cards username="nihal" btnText="click here"/>
      <Cards username="saeel" btnText="Visit here"/>

    </>
  )
}

export default App
