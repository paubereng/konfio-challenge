import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Label, Legend, ResponsiveContainer,
} from 'recharts';
import omit from 'lodash/omit';
import { COLORS } from '../constants';

const INITIAL_DATA = [
  {
    name: 'EUR', EUR: 0, USD: 0, GBP: 0,
  },
];

const customLabelLegend = name => `Date: ${name}`;

const SimpleLineChart = ({ rates }) => {
  const data = rates && rates.length > 0 ? rates : INITIAL_DATA;
  const currencies = Object.keys(omit(data[0], 'name'));
  return (
    <ResponsiveContainer width="99%" height="80%">
      <LineChart width={ 600 } height={ 300 } data={ data }
      margin={
        {
          top: 5, right: 25, bottom: 45, left: 5,
        }
      }>
        <XAxis dataKey="name">
          <Label value="Dates" offset={-20} position="insideBottom" />
        </XAxis>
        <YAxis>
          <Label value='Rates' angle={-90} position='insideLeft' />
        </YAxis>
        <Tooltip labelFormatter={customLabelLegend} />
        <Legend
          wrapperStyle={{
            paddingTop: 40, paddingLeft: 50,
          }}
        />
        { currencies.map((currency, index) => <Line key={ index } strokeWidth={2} type="monotone" stroke={COLORS[index]} dataKey={ currency } />) }
      </LineChart>
    </ResponsiveContainer>
  );
};

SimpleLineChart.propTypes = {
  rates: PropTypes.array,
};

export default SimpleLineChart;
