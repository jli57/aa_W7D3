import React from 'react';

class PokemonIndex  extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <ul className="pokemon-list">
        { this.props.pokemon.map( pkm => (
          <li key={pkm.id}>
            <img className="pokemon-icon" src={ pkm.image_url } alt={ pkm.name } />
            <p>{ pkm.name }</p>
          </li>
        )) }
      </ul>
    );
  }
}

export default PokemonIndex;
