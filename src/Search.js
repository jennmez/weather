import React from 'react';
import MapboxAutoComplete from 'react-mapbox-autocomplete';

const Search = (props) => {
  let { updateCoords } = props;

  const key = process.env.REACT_APP_MAPBOX_API_KEY;
  const fullKey = `pk.${key}`;
  const selectCity = (result, lat, lon) => {
    updateCoords({ lat, lon });
  };

  return (
    <div className="search">
      <MapboxAutoComplete
        publicKey={fullKey}
        inputClass="search"
        onSuggestionSelect={selectCity}
        resetSearch={false}
      />
    </div>
  );
};

export default Search;
