import { useEffect, useState } from "react"

export function Pokemons({
    setSelectedPokemonName
}) {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const getPokemons = async () => {
            const pokemonsResponse = await
                fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}`);

            const pokemonsJSON = await pokemonsResponse.json();

            setPokemons(pokemonsJSON.results)
        }

        getPokemons();
    }, [page])

    return <div>
        {pokemons.map((pokemon) =>
            <p key={pokemon.name}
                onClick={() => setSelectedPokemonName(pokemon.name)}
            >
                {pokemon.name}
            </p>
        )}

        <div>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 0}
            >
                Back
            </button>

            {page}

            <button
                onClick={() => setPage(page + 1)}
            >
                Next
            </button>
        </div>
    </div>
}