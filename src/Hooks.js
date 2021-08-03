
import React , {Fragment , useState } from "react" 

const App = () => { 
    let [ name , setName] =useState("")
    let [message , setMessage] = useState ("")

    const handleChange = (e) => {
        let {value} = e.target 
        setName(value)
    }
    const handleClick = (e) => {e.preventDefault() 
    setMessage(`Your name is ${name}`)
  }
   return (
       <Fragment>
       <h1> Hello , {name} </h1>
       <div>
            <input 
                type="text"
                value={name} 
                onChange={handleChange}
            />
            <button
                    onClick={handleClick}
            > 
                    Change
            </button>
            <p> {message} </p>
      </div>
    </Fragment>
      
    )
}
export default App


