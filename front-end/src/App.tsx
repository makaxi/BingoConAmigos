import React, { useEffect, useState } from 'react'
import './App.css'
import Board from './components/board/Board'

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const { activitiesWithFriends } = data;
        setBackendData(activitiesWithFriends);
        //console.log(backendData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      { (backendData.length === 0) 
      ? ( <p>Loading...</p>) 
      : ( <Board size={5} activites={backendData}/> )}
    </>
  );
}

export default App