import './pokemon.css';

import { usePokemon } from '../hooks/usePokemon';
import { Card } from '../shared/Card/Card';
import { Error } from '../shared/Error/Error';

export function Pokemon({ name }: { name: string }) {

    const { pokemonData, isLoading, isError } = usePokemon(name);

    if (!name) {
        return <div>Please type a pokemon name.</div>
    }

    if (isLoading) {
        return <div>Loading..</div>;
    }

    if (isError) {
        return <Error />
    }

    if (!pokemonData) {
        return <div>No results found.</div>
    }
    return (
        <>
            <div className='pokemon-container'>
                <Card name={pokemonData.name} imgSrc={pokemonData.sprites?.front_default}>
                    <h3>Abilities</h3>
                    <ul>
                        {pokemonData.abilities?.map((abilityObj, i) => (
                            <li key={i}>{abilityObj?.ability?.name}</li>
                        ))}
                    </ul>
                </Card>
            </div>
        </>
    );
}
