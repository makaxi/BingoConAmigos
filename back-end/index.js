import express from 'express';
import { randomizeBoard } from './dist/randomizeBoard.js';

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
  "Have a craft night",
  "Go kayaking",
  "Visit an escape room",
  "Attend a festival",
  "Take a cooking class",
  "Go to a trampoline park",
  "Have a wine tasting",
  "Go to a zoo",
  "Attend a dance class",
  "Take a scenic drive",
  "Go to a rooftop bar",
  "Have a photo shoot",
  "Go horseback riding",
  "Attend a live theater performance",
  "Take a hot air balloon ride",
  "Go to a botanical garden",
  "Have a beach bonfire",
  "Go to a water park",
  "Try indoor rock climbing",
  "Have a themed party",
  "Go to a painting class",
  "Attend a charity event",
  "Have a spa day",
  "Take a bike ride",
  "Have a sushi-making night"
];

console.log(activitiesWithFriends);
const randoBoard = randomizeBoard(activitiesWithFriends, 5);


const app = express();

app.get("/api", (req, res) => {
  res.json({"activitiesWithFriends" : randoBoard})
})

app.listen(5000, () => { 
  console.log("Server started on port 5000")
})