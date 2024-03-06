import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Board from './components/board/Board'

const activitiesWithFriends = [
  "Go for a hike",
  "Have a picnic in the park",
  "Play board games",
  "Go bowling",
  "Have a movie night",
  "Host a barbecue",
  "Go to a concert",
  "Visit a museum",
  "Go to the beach",
  "Have a game night",
  "Go on a road trip",
  "Try a new restaurant",
  "Go camping",
  "Have a potluck dinner",
  "Go to an amusement park",
  "Play sports together",
  "Have a karaoke night",
  "Go to a comedy show",
  "Attend a sporting event",
  "Go ice skating",
  "Have a bonfire",
  "Go to a farmers market",
  "Explore a new city",
  "Go to a theme park",
  "Sleep"
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board size={5} activites={activitiesWithFriends}/>
    </>
  )
}

export default App
