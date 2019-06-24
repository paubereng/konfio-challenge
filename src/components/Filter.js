import React from 'react';
import PropTypes from 'prop-types';

const renderTags = (currencies) => {
  const tags = currencies.map((currency, index) => (
    <div className="control" key={ index }>
      <div className="tags has-addons">
        <a className="tag is-link">{ currency }</a>
        <a className="tag is-delete"></a>
      </div>
    </div>
  ));
  return tags;
};

const Filter = ({ currencies }) => (
  <div className="filter-wrapper">
    <h3 className="title has-text-centered">Filters</h3>
    <div className="filter-date">
      <div>Dates:</div>
      <input className="input" />
      <input className="input" />
    </div>
    <div className="filter-currency field is-grouped is-grouped-multiline">
      { renderTags(currencies) }
    </div>
  </div>
);

Filter.propTypes = {
  currencies: PropTypes.array,
};

export default Filter;
