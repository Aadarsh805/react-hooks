import {useState, useEffect} from 'react'

const EffectHookCounter1 = () => {
  const [count,setCount] = useState(0)
  const [name, setName] = useState('')
  
  useEffect(() => {
    console.log('updating doc title')
    document.title =`${count} document`
  }, [count])
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    <button onClick={() => setCount(prevCount => prevCount + 1)}>Count {count}</button>      
    </div>
  )
}

export default EffectHookCounter1
