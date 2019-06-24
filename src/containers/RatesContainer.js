import React from 'react';
import SimpleLineChart from '../components/LineChart';
import Filter from '../components/Filter';
import CURRENCIES from '../constants';

const RatesContainer = () => (
  <section>
    <h1 className="title has-text-centered">konfio-App</h1>
      <div className="columns">
        <div className="column is-9 is-vcentered">
          <div className="line-chart-wrapper">
            <SimpleLineChart />
          </div>
        </div>
        <div className="column is-3">
          <Filter currencies={ CURRENCIES }/>
        </div>
      </div>
  </section>
);

export default RatesContainer;
