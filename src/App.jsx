import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)



  // ye function counter inncrease karne ke liye hai 

 const increaseCounter = ()=> {
  if(count ==10){
    return;
  }else{
    setCount(count+1)
  }
  
 };

 const decreaseCounter = ()=> {
  if(count ==0){
    return;
  }else{
    setCount(count-1)
  }
};

 const resetCounter = ()=> {
  setCount(0)
 }

  return (
    <div className='m-4 w-[80vh] flex flex-col justify-center border'>
      <div className='bg-sky-300 h-[40vh] w-[80vh] p-4 flex justify-center text-red-600 font-bold text-3xl'>
        <h2>Counter start : {count}</h2>
      </div>
      <div className='p-2 gap-5 flex justify-center bg-amber-200 w-[80vh]'>
        <button onClick={increaseCounter} className='bg-red-300 p-2 rounded'>Increase</button>
        <button onClick={decreaseCounter} className='bg-green-300 p-2 rounded'>Decrease</button>
        <button onClick={resetCounter} className='bg-blue-400 p-2 rounded'>Reset</button>
      </div>
    </div>
  
  )
}

export default App
