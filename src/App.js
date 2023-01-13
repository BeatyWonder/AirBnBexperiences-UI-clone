import './App.css';
import Navbar from './Comp/Navbar';
import Hero from './Comp/Hero';
import Card from './Comp/ActivityCard';
import data from "./data.js"

function App() {
  const dataItems = data.map((card)=>{
    return (
      <div>
          <Card 
            key={card.id}
            card ={card}
          
          />
      </div>
    )
  })
  return (
    <div>

     <Navbar /> 
     <Hero />
    <section className="cards-list">
          {dataItems}
            </section>
     
     

     </div>
  )

}

export default App;
