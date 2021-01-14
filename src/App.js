import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [albums, setAlbums] = useState([]);
  const [squares, setSquares] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => setAlbums([...data]));


  }, [])

  function buildSquares(e) {
    const id = e.target.selectedIndex + 1;
    setValue(e.target.value)
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(res => res.json())
      .then(data => setSquares([...data]));
  }



  return (
    <div className="App">
      <h1>Select an album:</h1>

      <select value={value} onChange={(e) => buildSquares(e)} >
        {albums.map((album, i) => {
          return <option key={i} id={i} value={album.title}>{album.title}</option>;
        })}
      </select>

      <div>
        {squares.map((square, i) => {
          return <img key={i} src={square.thumbnailUrl} alt="square" />
        })}
      </div>

    </div>
  );
}

export default App;
