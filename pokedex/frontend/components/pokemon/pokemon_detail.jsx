import React from 'react';
import {Route} from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';
import ItemDetail from '../items/item_detail';

class PokemonDetail extends React.Component {

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    const [ oldId, newId ] = [ this.props.match.params.pokemonId, newProps.match.params.pokemonId ];
    if ( oldId !== newId ) {
      this.props.requestSinglePokemon(newId);
    }
  }

  render () {
    const pkm = this.props.pokemon[this.props.match.params.pokemonId];
    return (
      <div className="pkm-detail">
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        <div>
          <img className="pkm-img" src={ pkm.image_url } alt={ pkm.name } />
          <h1>{ pkm.name }</h1>
          <p>Type: {pkm.poke_type}</p>
          <p>Attack: {pkm.attack}</p>
          <p>Defense: {pkm.defense}</p>
          <p>Moves: { pkm.moves ? pkm.moves.join(", ") : pkm.moves }</p>
          <div className="pkm-items">
            <h2>Items</h2>
            <ul className="pkm-items-list">
              { pkm.item_ids ? pkm.item_ids.map( (id) => <ItemDetail key={id} item={ this.props.items[id] } />) : pkm.item_ids }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
