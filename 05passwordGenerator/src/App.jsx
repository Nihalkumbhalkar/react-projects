import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] =useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz"
    if(numberAllowed) { str += "0123456789"}
    if(charAllowed) { str += "!@#$%^^&*"}

    for (let index = 1; index <= length; index++) {
      let char  = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback( () => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{passwordGenerator()}, [length, charAllowed, numberAllowed, passwordGenerator])

  // HTML code goes under return statement
  return (
    <>
    <div className="w-full max-w-md mx-auto rounded-md bg-gray-800 px-4 py-3 my-8 text-orange-500">
      <h1 className='text-white text-center mb-3'>Password Generator</h1>
      <div className='flex shadow rounded-md overflow-hidden mb-4'>
        <input 
        type="text" 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        value={password}
        ref={passwordRef}
        readOnly
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className="flex item-center gap-x-1">
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='courser-pointer'
          onChange={ (e)=>{setLength(e.target.value)} }
          />
          <label>Length : {length} </label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor='charInput'>Special Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
