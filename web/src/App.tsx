import { useState } from 'react'
import './App.css'
import { plus, fibonacci as wasmFibonacci } from "@/utils/wasm.js";
import { fibonacci as originFibonacci } from "./utils/fibonacci";


function App() {
  const [count, setCount] = useState(0)
  const times = 20
  const onClick = async () => {
    const value = await plus(count, 1)
    setCount(value)
  }

  const getWasmFibonacci = async () => {
    const value = await wasmFibonacci(times)
    console.log('getWasmFibonacci', value);
    wasmFibonacci(value)
  }

  const getOriginFibonacci = () => {
    const value = originFibonacci(times)
    console.log('getOriginFibonacci', value);

    originFibonacci(value)
  }


  const createFibonacci = async () => {
    console.time('getWasmFibonacci');
    // 这里是你要测量的代码
    getWasmFibonacci();
    console.timeEnd('getWasmFibonacci');
    console.time('getOriginFibonacci');
    // 这里是你要测量的代码
    getOriginFibonacci();
    console.timeEnd('getOriginFibonacci');
  }

  return (
    <>
      <div className="card">
        <button onClick={onClick}>
          count is {count}
        </button>
        <button onClick={createFibonacci}>
          create fibonacci {times}
        </button>
      </div>
    </>
  )
}

export default App
