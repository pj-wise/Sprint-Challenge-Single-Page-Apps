import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({ name: '' });

  const handleInputChange = (e) => {
    e.preventDefault();
    setQuery({ ...query, name: e.target.value });
  };
  return (
    <section className='search-form'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(query.name);
        }}>
        <input
          onChange={handleInputChange}
          placeholder='Name'
          value={query.name}
          name='name'
        />
        <button type='submit'>Search</button>
      </form>
    </section>
  );
}
