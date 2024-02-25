import { FC, useState } from 'react';
import { Pokemon } from './components/Pokemon';
import { useDebounce } from './hooks/useDebounce';

export const App: FC<{ name: string }> = (props) => {
  const [search, setSearch] = useState<string>('');
  const debouncedSearchTerm = useDebounce(search, 500);

  return (
    <div className='app-container'>
      <h1>{props.name}</h1>

      <div className="search">
        <label htmlFor="pokemon-search">Search Pokemon: </label>
        <input
          name="pokemon-search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <p className="instructions">
        Try typing 'bulbasaur' or 'charmander' or 'caterpie' to see a pokemon...
      </p>

      <Pokemon name={debouncedSearchTerm} />
    </div>
  );
};
