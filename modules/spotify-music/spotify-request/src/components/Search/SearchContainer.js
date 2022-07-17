import React from 'react';


const SearchContainer = () => {
  return (
		<div className='mx-auto container mt-3'>
      <div class="input-group">
        <div class="input-group-item">
          <input
            class="form-control input-group-inset input-group-inset-after"
            placeholder="Search for songs on Spotify..."
            type="text"
          />
          <span
            class="input-group-inset-item input-group-inset-item-after"
          >
            <button class="btn btn-unstyled" type="button">
            <svg
                class="lexicon-icon lexicon-icon-search"
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