import {useState} from 'react'

const HookCounter3 = () => {
    const[name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
        <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
        <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
        <p>your first name is {name.firstName}</p>
        <p>your lastName name is {name.lastName}</p>
    </div>
  )
}

export default HookCounter3