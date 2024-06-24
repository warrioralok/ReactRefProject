import React , { useRef }from 'react'

function Usereftutorial() {
  const inputRef = useRef(null);
  
  const checkValue = () =>{
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={checkValue}>Change Name</button>
    </div>
  )
}


export default Usereftutorial
