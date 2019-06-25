import React, { Component } from 'react';
import moment from 'moment';
import SimpleLineChart from '../components/LineChart';
import Filter from '../components/Filter';
import monthsBetweenDates from '../utils/dates';
import { fetchSymbols, fetchRates } from '../utils/fetch';
import { INITIAL_CURRENCIES_SELECT } from '../constants';

class RatesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: [],
      symbols: {},
      filters: {
        startDate: undefined,
        endDate: undefined,
        currenciesSelected: [...INITIAL_CURRENCIES_SELECT],
      },
    };
    this.handleClickFilter = this.handleClickFilter.bind(this);
  }

  componentDidMount() {
    this.getSymbols();
    this.initRates();
  }

  initRates = () => {
    const { currenciesSelected } = this.state.filters;
    const endDate = moment(new Date());
    const firstDate = moment(moment(endDate).subtract(4, 'months'));
    const enumMonthsBetweenDates = monthsBetweenDates(firstDate, endDate);
    const formatCurrencies = this.currenciesToString(currenciesSelected);
    this.getRates(enumMonthsBetweenDates, formatCurrencies);
  }

  getSymbols() {
    fetchSymbols()
      .then((response) => {
        this.setState({
          symbols: response,
        });
      });
  }

  getRates(dates, currencies) {
    fetchRates(dates, currencies)
      .then((response) => {
        this.setState({
          rates: response,
        });
      });
  }

  changeFilter = (name, value) => {
    this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        [name]: value,
      },
    });
  }

  handleClickFilter() {
    const { startDate, endDate, currenciesSelected } = this.state.filters;
    const formatStartDate = moment(startDate).format('YYYY-MM-DD');
    const formatEndDate = moment(endDate).format('YYYY-MM-DD');
    const formatCurrencies = this.currenciesToString(currenciesSelected);
    const enumMonthsBetweenDates = monthsBetweenDates(formatStartDate, formatEndDate);
    this.getRates(enumMonthsBetweenDates, formatCurrencies);
  }

  currenciesToString = currencies => currencies.map(currency => currency.label).toString();

  render() {
    const { symbols, rates, filters } = this.state;

    return (
      <section className="rates-section">
        <h1 className="title has-text-centered is-spaced">konfio-App</h1>
        <h2 className="subtitle has-text-centered">FX rates of the Mexican peso against other currencies</h2>
        <div className="columns reverse-column-order">
          <div className="column is-8 is-vcentered">
            <div className="line-chart-wrapper">
              <SimpleLineChart rates={ rates } />
            </div>
          </div>
          <div className="column is-4">
            <Filter options={ filters } symbols={ symbols }
            handleClick={ this.handleClickFilter }
            onChangeFilter={ this.changeFilter }
            />
          </div>
        </div>
      </section>
    );
  }
}

export default RatesContainer;
