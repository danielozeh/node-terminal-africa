import TerminalAfrica from '../index';

test('countries', async () => {
  const countries: any = await TerminalAfrica.countries();
  expect(countries.status).toBe(true);
});

test('states', async () => {
  const states: any = await TerminalAfrica.states('NG');
  expect(states.status).toBe(true);
});

test('cities', async () => {
  const cities: any = await TerminalAfrica.cities('NG', 'Lagos');
  console.log(cities);
  expect(cities.status).toBe(true);
});
