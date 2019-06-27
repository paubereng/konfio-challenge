import moment from 'moment';

export default function monthsBetweenDates(startDate, endDate) {
  const now = moment(startDate).clone();
  const dates = [];

  while (now.isSameOrBefore(endDate)) {
    dates.push(now.format('YYYY-MM-DD'));
    now.add(1, 'months');
  }
  return dates;
}
