import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import { DatasProvider } from './Datas/Datas';

function App(){
  return(
    <>
    <Router>
      <DatasProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />}/>
          </Routes>
        </DatasProvider>
    </Router>
    </>
  )
}
export default App;