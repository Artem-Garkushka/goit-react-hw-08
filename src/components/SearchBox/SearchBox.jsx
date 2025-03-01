import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css.searchBox}>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={onChange}
        placeholder="Search..."
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
