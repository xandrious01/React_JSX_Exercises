const App = () => {
    return <div>
        <Tweet 
        name="Jacob Kaltefleiter" 
        username="@calltaflighter" 
        date="04/25/19" 
        content="If you're feeling lazy just know that my mom just asked my brother to vacuum his room, but he youtubed a vacuum sound & laid in bed instead"/>
        <Tweet 
        name="Janel Comeau" 
        username="@VeryBadLlama" 
        date="08/03/21" 
        content="instagram: look at my new boyfriend!
        twitter: I can't get a boyfriend
        reddit: my [21F] boyfriend [53M] forbids me from going into the basement and has a sock drawer full of missing women's driver's licenses, AITA for being uncomfortable? the wedding is in three hours"/>
        <Tweet 
        name="kim" 
        username="@KimmyMonte" 
        date="10/29/23" 
        content="bill nye's full name is william new years eve"/>
    </div>
}

ReactDOM.render(<App />, document.getElementById("root"));

