import { Button } from '@mui/material'
import './App.css'
import { Star } from '@mui/icons-material'


function App() {


  return (
    <>
  <Button
  variant="contained"
  onClick={() => console.log('hello World')}
  disabled
  >
  <Star></Star></Button>
 
  
    </>
  )
}

export default App
