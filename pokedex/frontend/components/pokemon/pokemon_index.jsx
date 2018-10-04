import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex  extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul className="pokemon-list">
        { this.props.pokemon.map( pkm => (
          <PokemonIndexItem key={pkm.id} pkm={pkm} />
        )) }
      </ul>
    );
  }
}

export default PokemonIndex;
