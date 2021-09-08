import Tasks from "./Tasks"
function App() {
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'center'}}>
        <h1>Tasks</h1>
      </div>
      <div style={{display:'flex',justifyContent:'flex-end'}}>
        <div style={{display:"flex",flexDirection:"column"}}>
          <h3>Nom:Hrichi</h3>
          <h3>Prénom:Ahmed</h3>
          <h3>Tél:28096659</h3>
        </div>
      </div>
      <Tasks/>
    </div>
  );
}

export default App;
