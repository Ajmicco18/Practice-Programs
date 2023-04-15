import { useState, useEffect } from "react"

export function Pokemon({
    selectedPokemonName,
    setSelectedPokemonName
}) {
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        const getPokemon = async () => {
            const pokemonResponse =
                await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemonName}`)

            const pokemon = await pokemonResponse.json();

            setPokemon(pokemon);
        }

        getPokemon();
    }, [selectedPokemonName])

    return <div>
        <h2>{selectedPokemonName}</h2>

        {pokemon && <img src={pokemon.sprites.front_default} />}

        {pokemon && <div>
            Height: {pokemon.height} / Weight: {pokemon.weight}
        </div>}

        <button
            onClick={() => setSelectedPokemonName(null)}
        >
            Back
        </button>
    </div>
}