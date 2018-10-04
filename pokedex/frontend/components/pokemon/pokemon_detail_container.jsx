import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon,
    items: state.entities.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
  };
};

const PokemonDetailContainer = connect( mapStateToProps, mapDispatchToProps )( PokemonDetail );

export default PokemonDetailContainer;
