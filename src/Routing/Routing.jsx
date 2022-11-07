import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Addproduct from '../component/Addproduct'
import Datapage from '../component/Datapage'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Datapage/>}/>
            <Route path='/add' element={<Addproduct/>}/>
        </Routes>
    </div>
  )
}

export default Routing