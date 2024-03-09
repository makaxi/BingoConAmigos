const express = require('express')
const app = express()

app.get("/api", (req, res) => {

  res.json({"activitiesWithFriends" : 
  [
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
  ]
  })
})

app.listen(5000, () => { console.log("Server started on port 5000")})