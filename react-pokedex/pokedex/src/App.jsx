import { Pokemons } from "./Pokemons";
import { Pokemon } from "./Pokemon";
import { useState } from "react";

export default function App() {
    const [selectedPokemonName, setSelectedPokemonName] = useState(null)

    return (
        <main>
            <h1>Pokedex</h1>

            {selectedPokemonName ?
                <Pokemon
                    selectedPokemonName=
                    {selectedPokemonName}
                    setSelectedPokemonName=
                    {setSelectedPokemonName}
                /> :
                <Pokemons
                    setSelectedPokemonName=
                    {setSelectedPokemonName}
                />}
        </main>
    )
}
