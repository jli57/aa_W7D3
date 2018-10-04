import React from 'react';
import {Link} from 'react-router-dom';

const ItemDetail = ({item}) => {
  return (
    <li className="item">
      <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
        <img className="item-img" src={ item.image_url } alt={ item.name } />
      </Link>
    </li>
  )
};

export default ItemDetail;
