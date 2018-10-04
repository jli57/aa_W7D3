import React from 'react';
import {Route,Link} from 'react-router-dom';
import ItemDetailContainer from '../items/item_detail_container';

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
        <div className="pkm-info">
          <img className="pkm-img" src={ pkm.image_url } alt={ pkm.name } />
          <h1>{ pkm.name }</h1>
          <p>Type: {pkm.poke_type}</p>
          <p>Attack: {pkm.attack}</p>
          <p>Defense: {pkm.defense}</p>
          <p>Moves: { pkm.moves ? pkm.moves.join(", ") : pkm.moves }</p>
          <div className="pkm-items">
            <h2>Items</h2>
            <ul className="pkm-items-list">
              { pkm.item_ids ? pkm.item_ids.map( (id) =>
                <Link to={`/pokemon/${pkm.id}/item/${id}`}>
                  <img className="item-img" src={ this.props.items[id].image_url } />
                </Link> )
                : pkm.item_ids }
            </ul>
            <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;
