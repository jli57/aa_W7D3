import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import {Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex  extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    if(this.props.pokemon.length === 0){
      return null;
    }
    return (
      <div className="main">
        <ul className="pokemon-list">
          { this.props.pokemon.map( pkm => (
            <PokemonIndexItem key={pkm.id} pkm={pkm} />
          )) }
        </ul>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer}/>
      </div>
    );
  }
}

export default PokemonIndex;
