import {useState, useEffect} from 'react'

const HookMouse = () => {
    const[x, setX] = useState(0)
    const[y,setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('adfa')
        setX(e.clientX)
        setY(e.clientY)
    }
    
    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('remove')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])

  return (
    <div>
        Hook X - {x}  Y - {y} 
    </div>
  )
}

export default HookMouse