import monthsBetweenDates from '../dates';

describe('monthsBetweenDates function', () => {
  it('return array of dates between 2 dates', () => {
    const startDate = '2019-01-01';
    const endDate = '2019-03-01';
    const resultExpected = ['2019-01-01', '2019-02-01', '2019-03-01'];

    let convert = monthsBetweenDates(startDate, endDate);

    expect(convert).toStrictEqual(resultExpected);
  });
});
