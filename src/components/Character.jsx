import React, { useEffect, useState } from 'react'

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    // .then(data => console.log(data) )
    .then(data => setCharacter(data.results) )
});


  return (
    <div>
      <h3>Character List</h3>
      {character.map(character => (
        <h5 key={character.id}>{character.name}</h5>
      ))}
    </div>
  )
}

export default Character