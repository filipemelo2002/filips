import React from 'react';

const Item = () => {
  return (
    <div className='overflow-hidden w-100 d-flex align-items-center song-item mt-3 rounded'>
      <img src="https://e-cdns-images.dzcdn.net/images/cover/1e1146f11ba53e8e0f8e456c722d94ae/56x56-000000-80-0-0.jpg"/>
      <h5 className='m-0 ml-3 w-50 font-weight-normal'>Glimpse of Us</h5>
      <p className='m-0 ml-3'>Joji</p>
      <small className='ml-auto mr-3'>4:00</small>
    </div>
  )
}

export default Item;