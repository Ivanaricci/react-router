
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage"
import Chisiamo from './pages/Chisiamo'
import ListaProdotti from './products/ListaProdotti'
import DetailProduct from './products/DetailProduct'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/chisiamo" element={<Chisiamo />}></Route>
          <Route path="/listaprodotti" element={<ListaProdotti />} />
          <Route path="/products/:id" element={<DetailProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
