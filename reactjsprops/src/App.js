import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import dataComp from './data/data'

function App() {

  const cards =dataComp.map((item)=>{
    return (
      <Card 
      key={item.id}
      item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
