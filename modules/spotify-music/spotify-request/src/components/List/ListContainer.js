import React from 'react';
import Item from './Item';

const ListContainer = () => { 
  return (
    <div className='container mt-4 song-list d-flex flex-column gap-3'>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  ); 
}

export default ListContainer;