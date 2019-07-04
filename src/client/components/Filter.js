import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeStartDate(date) {
    this.props.onChangeFilter('startDate', date);
  }

  handleChangeEndDate(date) {
    this.props.onChangeFilter('endDate', date);
  }

  handleClickButton(ev) {
    ev.preventDefault();
    this.props.handleClick(this.state);
  }

  handleChangeSelect(selectedOption) {
    this.props.onChangeFilter('currenciesSelected', selectedOption);
  }

  prepareCurrencyToReactSelect = (symbols) => {
    const newSymbols = [];
    Object.keys(symbols).map((symbol) => {
      newSymbols.push({
        label: [symbol],
        value: symbols[symbol],
      });
      return newSymbols;
    });
    return newSymbols;
  }

  filterMinDate = date => moment() > date && this.props.options.endDate > date;

  filterMaxDate = date => moment() > date && this.props.options.startDate < date;

  validateDate = date => !date || date === null || date === '' || !moment(new Date(date)).isValid();

  render() {
    const { symbols, options } = this.props;
    const { startDate, endDate, currenciesSelected } = options;
    const symbolsArr = symbols && this.prepareCurrencyToReactSelect(symbols);
    const btnDisabled = this.validateDate(startDate) || this.validateDate(endDate)
      || (!currenciesSelected || !currenciesSelected.length > 0);

    return (
      <div className="filter-wrapper">
        <h3 className="title is-4 has-text-centered">Filters</h3>
        <div className="filter-date">
          <div className="filter-date__item">
            <div>Min date:</div>
            <DatePicker className="input"
            dateFormat="MM/yyyy"
            showMonthYearPicker selected={ startDate }
            onSelect={ this.handleChangeStartDate }
            filterDate={ this.filterMinDate }
            placeholderText="Select a date"
            />
          </div>
          <div className="filter-date__item">
            <div>Max date:</div>
            <DatePicker className="input" dateFormat="MM/yyyy"
            showMonthYearPicker selected={ endDate }
            onSelect={ this.handleChangeEndDate }
            filterDate={ this.filterMaxDate }
            placeholderText="Select a date"
            />
          </div>
        </div>
        <div className="filter-currency">
          <Select
            isMulti
            className="currencies-select"
            classNamePrefix="select"
            value={currenciesSelected}
            onChange={this.handleChangeSelect}
            options={symbolsArr}
          />
        </div>
        <div className="filter-action">
          <button disabled={ btnDisabled } className="button is-primary" onClick={ this.handleClickButton }>Filter</button>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  symbols: PropTypes.object,
  options: PropTypes.shape({
    startDate: PropTypes.date,
    endDate: PropTypes.date,
    currenciesSelected: PropTypes.array,
  }),
  onChangeFilter: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Filter;
