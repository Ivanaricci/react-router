
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Chisiamo from './pages/Chisiamo'
import ListaProdotti from './pages/ListaProdotti'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage}></Route>
          <Route path="/chisiamo" Component={Chisiamo}></Route>
          <Route path="/listaprodotti" Component={ListaProdotti}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
