import TerminalAfrica from '../index';

const address_data = {
  first_name: 'Daniel',
  last_name: 'Ozeh',
  email: 'danielozeh@gmail.com',
  phone: '+2348134277988',
  is_residential: true,
  line1: 'EridanSpace, Oluwalogbon House',
  line2: 'Obafemii Awolowo way, Alausa',
  city: 'Ikeja',
  state: 'Lagos',
  country: 'NG',
  zip: '100123',
};

const parcel_data = {
  description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
  packaging: '',
  weight_unit: 'kg',
  items: [
    {
      description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
      name: '0% off on Offer on deals',
      currency: 'NGN',
      value: 0.5,
      quantity: 1,
      weight: 10,
    },
  ],
  metadata: {},
};

test('get shipment rates', async () => {
  const address = await TerminalAfrica.createAddress(address_data);
  const parcel = await TerminalAfrica.createParcel(parcel_data);
  const queryParams = `?pickup_address=${address.data.address_id}&delivery_address=${address.data.address_id}&parcel_id=${parcel.data.parcel_id}`;
  const rates: any = await TerminalAfrica.getShipmentRates(queryParams);
  expect(rates.status).toBe(true);
}, 20000);

test('get quotes for shipment', async () => {
  const quotes_data = {
    pickup_address: address_data,
    delivery_address: address_data,
    parcel: parcel_data,
  };
  const quotes: any = await TerminalAfrica.getQuotesForShipment(quotes_data);
  expect(quotes.status).toBe(true);
}, 20000);

test('get rates', async () => {
  const queryParams = `?page=1&perPage=1`;
  const rates: any = await TerminalAfrica.getRates(queryParams);
  expect(rates.status).toBe(true);
}, 10000);

test('get rate', async () => {
  const queryParams = `?page=1&perPage=1&type=soft-packaging`;
  const rates: any = await TerminalAfrica.getRates(queryParams);
  const rate: any = await TerminalAfrica.getRate(rates.data.rates[0].rate_id);
  expect(rate.status).toBe(true);
}, 20000);
