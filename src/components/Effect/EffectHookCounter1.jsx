import {useState, useEffect} from 'react'

const EffectHookCounter1 = () => {
  const [count,setCount] = useState(0)
  useEffect(() => {
    document.title =`${count} document`
  }, [count])
  return (
    <div>
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Count {count}</button>      
    </div>
  )
}

export default EffectHookCounter1
