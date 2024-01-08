const Person = (props) => {
    const { name, age, hobbies } = props;
    let ageMsg;
    let displayName;
    (age > 18) ? ageMsg = "Please go vote!" : ageMsg = "You must be 18.";
    (name.length > 8) ? displayName = name.slice(0,5) : displayName = name;
    console.log(ageMsg)
    return (
    <div>
        <p>Learn some information about this person!</p>
        <h1>{displayName}</h1>
        <h3>{age}</h3>
        <h3>{ageMsg}</h3>
        <h4>Hobbies:</h4>
        <ul>
            {hobbies.map(i => <li>{i}</li>)}
        </ul>
    </div>
    )
    
}

