import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '2013-12-24', MEX: 1.45, AUD: 2.33, CHF: 1.15, USD: 2.65,
  },
  {
    name: '2013-12-25', MEX: 1.15, AUD: 2.33, CHF: 1.15, USD: 2.65,
  },
  {
    name: '2013-12-26', MEX: 1.75, AUD: 2.73, CHF: 1.19, USD: 1.65,
  },
  {
    name: '2013-12-27', MEX: 1.65, AUD: 2.53, CHF: 1.35, USD: 2.25,
  },
];
const currencies = [
  'MEX', 'AUD', 'CHF', 'USD',
];

const SimpleLineChart = () => (
  <ResponsiveContainer width="99%" height="80%">
    <LineChart width={ 600 } height={ 300 } data={ data }
    margin={
      {
        top: 5, right: 5, bottom: 5, left: 5,
      }
    }>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid />
       <Tooltip/>
       <Legend />
       { currencies.map((currency, index) => <Line key={ index } type="monotone" dataKey={ currency } />)}
    </LineChart>
  </ResponsiveContainer>
);

export default SimpleLineChart;
