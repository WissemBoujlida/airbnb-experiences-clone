import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(card => <Card
    key={card.id}
    card={card}
  />)
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>

  )
}

export default App;