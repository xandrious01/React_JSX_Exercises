const App = () => {
  return <div>  
     <FirstComponent />
     <NamedComponent name="Ally" />
  </div>
};

ReactDOM.render(<App />, document.getElementById("root"));
