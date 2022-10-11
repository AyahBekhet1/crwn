import {Routes , Route , Outlet} from 'react-router-dom';
import Home from './routes/home/Home' 


const Navigation = () =>{
  return (
    
    <div> 
      <h2>i am navigation bar  </h2>
      <Outlet />
    </div>
  )
}

const Shop = () => {
  return (
    <div>
    <h1>this is my shop </h1>
    </div>
  )
}

export default function App () {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>

      <Route index element ={<Home />} />
      <Route path='shop' element={<Shop />} />
      </Route>

    
    </Routes>
  )
}
