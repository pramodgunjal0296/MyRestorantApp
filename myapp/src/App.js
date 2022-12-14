import React,{useEffect} from 'react'
import {Route, Routes  } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import {Header,MainContainer,CreateContainer} from './components'
import './index.css'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'


const App = () => {
  const [{foodItems},dispatch]=useStateValue();

  const fetchData = async () =>{
    await getAllFoodItems().then( data =>{
     dispatch({
      type:actionType.SET_FOOD_ITEMS,
      foodItems : data
     })
    })
  }
  useEffect((e)=>{
    fetchData(e);
  },[]);
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <main className='mt-14 md:mt-20 py-4 px-8 md:px-16 w-full'>
      <Routes>
        <Route path='/*' element={<MainContainer/>}/>
        <Route path='/createItem' element={<CreateContainer/>}/>

      </Routes>
      
      </main>
      </div>
      </AnimatePresence>
  )
}









export default App