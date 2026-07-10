const Thirdcomponent =() =>{
    // variables are declayed here 
    let age=22
    let name="Bob"
    let school="modcom"
    let country="Kenya"
    let message="I love programming"
    let game="Basketball"
    let pj="DMC Legacy"
    return(
        <div>
            <h1>Welcome to third component</h1>
            <h2>{age}is the years he has had in this word.</h2>
            <h3>{name} is name of honer</h3>
            <p>{name} is {age} yeras old.</p>
            <h2>{school} is a good place to be.</h2>
            <h2>{country} is one of the leading countries with many corrupt leaders.</h2>
            <h1>{message}</h1>
            <h1>{game}is the most love sport in the USA.</h1>
            <h3>{pj} is the futere of all the next world generation wealth.</h3>
        </div>
    )
}
export default Thirdcomponent