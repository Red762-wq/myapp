import {useState} from "react"
const Fouthcomponent=()=>{
    // declayer the states here 
    const [age, setAge]=useState(20)
    const[year, setYear]=useState(2000)
    const [marks, setMarks]=useState(5)
    // function to update age 
    const updateage =()=>{
        setAge(age*5000000000)
    }
    const updateyear=()=>{
        setYear(year+10)
    }
    const updatemarks=()=>{
        setMarks(marks+20)
    }
    return(
        <div>
            <h1>Reactjs use state Hook</h1>
            <h2>{age}</h2>
            <button onClick={updateage}>Click to update Age</button>
            <h2>{year}</h2>
            <button onClick={updateyear}>Click to update Year</button>
            <h2>{marks}</h2>
            <button onClick={updatemarks}>Click to update marks</button>
        </div>
    )
}
export default Fouthcomponent