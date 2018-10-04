import {connect} from 'react-redux';
import {selectPokemonItem} from '../../reducers/selectors';
import ItemDetail from './item_detail'; 

const mapStateToProps = (state, ownProps) => {
  return {
    item: selectPokemonItem(state, ownProps.match.params.itemId)
  };
};

const ItemDetailContainer = connect( mapStateToProps, null )(ItemDetail);

export default ItemDetailContainer;
