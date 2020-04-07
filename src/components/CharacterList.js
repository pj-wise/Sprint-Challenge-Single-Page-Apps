import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((res) => {
        console.log(res.data.results);
        setChars(res.data.results);
      })
      .catch((err) => {
        console.log('You just had to touch it 😒', err);
      });
  }, []);

  const characterFilter = (query) => {
    // setChars(chars.filter((char) => char.name === query));
    console.log(query);
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((res) => {
        console.log(res.data.results);
        setChars(res.data.results);
      })
      .catch((err) => {
        console.log('You just had to touch it 😒', err);
      });
  };

  return (
    <div>
      <SearchForm onSearch={characterFilter} />
      <section className='character-list grid-view'>
        {chars.map((char) => {
          return <CharacterCard char={char} key={char.i} />;
        })}
      </section>
    </div>
  );
}
