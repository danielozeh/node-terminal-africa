import TerminalAfrica from '../index';

const address_data = {
  first_name: 'Daniel',
  last_name: 'Ozeh',
  email: 'danielozeh@gmail.com',
  phone: '+2348134277988',
  is_residential: true,
  line1: 'The Phillipi centre, Oluwalogbon House',
  line2: 'Obafemii Awolowo way, Alausa, Ikeja',
  city: 'Ikeja',
  state: 'Lagos',
  country: 'NG',
  zip: '100123',
};

test('Get terminal carriers', async () => {
  const queryParams = `?page=1&perPage=10`;
  const carriers: any = await TerminalAfrica.getCarriers(queryParams);
  expect(carriers.status).toBe(true);
});

test('get carrier', async () => {
  const queryParams = `?page=1&perPage=1&active=true`;
  const carriers: any = await TerminalAfrica.getCarriers(queryParams);
  const carrier: any = await TerminalAfrica.getCarrier(carriers.data.carriers[0].carrier_id);
  expect(carrier.status).toBe(true);
});

test('disable carrier', async () => {
  const queryParams = `?page=1&perPage=1&active=true`;
  const carriers: any = await TerminalAfrica.getCarriers(queryParams);
  const carrier: any = await TerminalAfrica.disableCarrier(
    carriers.data.carriers[0].carrier_id,
    '?domestic=true&regional=true&international=true',
  );
  expect(carrier.status).toBe(true);
});

test('enable carrier', async () => {
  const queryParams = `?page=1&perPage=1&active=true`;
  const carriers: any = await TerminalAfrica.getCarriers(queryParams);
  const carrier: any = await TerminalAfrica.enableCarrier(
    carriers.data.carriers[0].carrier_id,
    '?domestic=true&regional=true&international=true',
  );
  expect(carrier.status).toBe(true);
});

test('disable multiple carrier', async () => {
  const queryParams = `?page=1&perPage=1&active=true`;
  const carriers: any = await TerminalAfrica.getCarriers(queryParams);
  const carriers_to_disable = {
    carriers: [
      {
        carrier_id: carriers.data.carriers[0].carrier_id,
        domestic: true,
        regional: true,
        international: true,
      },
    ],
  };
  const carrier: any = await TerminalAfrica.disableMultipleCarrier(carriers_to_disable);
  expect(carrier.status).toBe(true);
});

test('enable multiple carrier', async () => {
  const queryParams = `?page=1&perPage=1&active=true`;
  const carriers: any = await TerminalAfrica.getCarriers(queryParams);
  const carriers_to_enable = {
    carriers: [
      {
        carrier_id: carriers.data.carriers[0].carrier_id,
        domestic: true,
        regional: true,
        international: true,
      },
    ],
  };
  const carrier: any = await TerminalAfrica.enableMultipleCarrier(carriers_to_enable);
  expect(carrier.status).toBe(true);
});
