const App = () => {
    return <div>  
       <Person name="Alexandria" age="26" hobbies={ ["running", "hiking", "cooking"] }/>
       <Person name="Tammy" age="54" hobbies={ ["nails", "pickleball", "decorating"] } />
       <Person name="Harley" age="7" hobbies={ ["walkies", "treats", "cuddling with mom"] }/>
    </div>
  };
  
  ReactDOM.render(<App />, document.getElementById("root"))