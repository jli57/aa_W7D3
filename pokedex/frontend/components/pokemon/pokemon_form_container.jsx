import {connect} from 'react-redux';
import PokemonForm from './pokemon_form';
import {createNewPokemon} from '../../actions/pokemon_actions';

const mapDispatchToProps = dispatch => {
  return {
    createNewPokemon: (pokemon) => dispatch(createNewPokemon(pokemon))
  };
};

const PokemonFormContainer = connect(null, mapDispatchToProps)(PokemonForm);

export default PokemonFormContainer;
