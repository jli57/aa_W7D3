import React from 'react';
import {Link} from 'react-router-dom';


const PokemonIndexItem = ({pkm}) =>{
  return (
    <li>
      <Link className="pkm-li" to='/pokemon/:pokemonId'>
      <p>{pkm.id}</p>
      <img className="pokemon-icon" src={ pkm.image_url } alt={ pkm.name } />
      <p>{ pkm.name }</p>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
