import React, { useState } from 'react';
import { Form } from 'react-bulma-components';

export default function SearchBar(props) {
  const [query, setQuery] = useState('');

  const Search = (e) => {
    if (e.key === 'Enter') {
      props.fetchSearch(query);
      setQuery("")
    }
  };

  return (
    <>
      <Form.Field onKeyDown={Search}>
       <Form.Control iconRight>
        <Form.Input
          placeholder='Álbuns, artistas ou músicas'
          placeholder='Álbums, artistas ou músicas'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
       </Form.Control>
     </Form.Field>
    </>
  );
}
