import './App.css';
import Header from "./components/Header.js"
import Content from "./components/Content.js"

function App() {
  return (
    <div className="container">
     <Header title={"Pokédex"}/>
     <Content />
    </div>
  );
}

export default App;
