import React from 'react';
import './ListItem.css';
import './MunroSelect';

const ListItem = ({munro, onMunroClick}) => {

  const handleClick = function(){
    onMunroClick(munro);
  }
  return (
  <option>{munro.name}</option>
  )
}

export default ListItem;