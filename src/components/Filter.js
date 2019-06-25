import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: undefined,
      endDate: undefined,
      currenciesSelected: [],
    };
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  renderTags(currencies) { // eslint-disable-line class-methods-use-this
    const tags = currencies.map((currency, index) => (
      <div className="control" key={ index }>
        <div className="tags has-addons">
          <a className="tag is-link">{ currency }</a>
          <a className="tag is-delete"></a>
        </div>
      </div>
    ));
    return tags;
  }

  handleChangeStartDate(date) {
    this.setState({
      startDate: date,
    });
  }

  handleChangeEndDate(date) {
    this.setState({
      endDate: date,
    });
  }

  handleClickButton(ev) {
    ev.preventDefault();
    this.props.handleClick(this.state);
  }

  handleChangeSelect(selectedOption) {
    this.setState({ currenciesSelected: selectedOption });
  }

  prepareCurrencyToReactSelect = (currencies) => {
    const newRates = [];
    Object.keys(currencies).map((currency) => {
      newRates.push({
        label: [currency],
        value: currencies[currency],
      });
      return newRates;
    });
    return newRates;
  }

  render() {
    const { startDate, endDate, currenciesSelected } = this.state;
    const { currencies } = this.props;
    const currenciesArr = this.prepareCurrencyToReactSelect(currencies);

    return (
      <div className="filter-wrapper">
        <h3 className="title has-text-centered">Filters</h3>
        <div className="filter-date">
          <div>Dates:</div>
          <DatePicker className="input" dateFormat="MM/yyyy" showMonthYearPicker selected={ startDate } onSelect={ this.handleChangeStartDate } />
          <DatePicker className="input" dateFormat="MM/yyyy" showMonthYearPicker selected={ endDate } onSelect={ this.handleChangeEndDate } />
        </div>
        <div className="filter-currency field is-grouped is-grouped-multiline">
          <Select
            isMulti
            className="currencies-select"
            classNamePrefix="select"
            value={currenciesSelected}
            onChange={this.handleChangeSelect}
            options={currenciesArr}
          />
        </div>
        <button className="button is-primary" onClick={ this.handleClickButton }>Filter</button>
      </div>
    );
  }
}

Filter.propTypes = {
  currencies: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Filter;
