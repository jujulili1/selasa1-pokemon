import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";


const Card = styled.div`
border-radius:5%;
justify-content:center;
align-items:center;
align-content:center;
flex-wrap:wrap;
border:1px solid teal;
margin:20px;
background-color: pink;
    width: 250px;
    height: 350px;
    word-break: break;
    & img {
        width: 100%;
    }
`;

function PokemonDetails() {
    let { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    function fetchSinglePokemon() {
        let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

        fetch(url)
            .then((response) => response.json())
            .then((result) => setPokemon(result));
    }

    useEffect(() => {
        fetchSinglePokemon();

        // eslint-disable-next-line
    }, []);

    return (
        <div 
        style={{ display: "flex", justifyContent: "center", marginTop:"1px", flexWrap: "wrap" }}
        >
            <Card>  
                <div>
            {pokemon.sprites !== undefined && (
                <img src={pokemon.sprites.front_shiny} alt="pokemon" />
            )}
            </div>
            <div 
            style={{textAlign:"center", marginTop:"1px"}}
            >
              <h1>{pokemon.name} </h1>
              </div>
              <div
              style={{textAlign:"center"}}
              >
              <p>Weight:{pokemon.weight}</p>
              <p>Base Statetic:{pokemon.base_experience}</p>
              <p>Ability:
            {pokemon.abilities !== undefined && (
              <span>{pokemon.abilities[0].ability.name}</span>
            )}</p>
            <p>  Moves:
            {pokemon.moves !== undefined && (
              <span>{pokemon.moves[0].move.name}</span>
            )}</p>
            </div>
            </Card>
        </div>
    );
}

export default PokemonDetails;