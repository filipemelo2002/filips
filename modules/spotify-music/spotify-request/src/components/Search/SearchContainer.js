import React, {useRef} from 'react';
import { searchTracks } from '../../services/deezerService';


const SearchContainer = () => {
  const inputRef = useRef();

  const onClick = async (event) => {
    event.preventDefault();

    const response = await searchTracks(inputRef.current.value);

    console.log(response);
  }
  return (
		<div className='mx-auto container mt-3'>
      <div className="input-group">
        <div className="input-group-item">
          <input
            className="form-control input-group-inset input-group-inset-after"
            placeholder="Search for songs on Deezer..."
            type="text"
            ref={inputRef}
          />
          <span
            className="input-group-inset-item input-group-inset-item-after"
          >
            <button className="btn btn-unstyled" type="button" onClick={onClick}>
            <svg
                className="lexicon-icon lexicon-icon-search"
                focusable="false"
                role="presentation"
              >
                <use href="/o/classic-theme/images/clay/icons.svg#search"></use>
              </svg>
            </button>
          </span>
        </div>
      </div>
		</div>
	);
}

export default SearchContainer;