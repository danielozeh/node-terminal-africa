import TerminalAfrica from '../index';

const shipment_data = {
  address_from: 'AD-I3ZNBM5Q69P8UQKV',
  address_to: 'AD-P2TQ9TQEZPETKP7U',
  parcel: 'PC-J9FTT8W3FZ7XOSSX',
  shipment_purpose: 'personal',
};

const quick_shipment_data = {
  pickup_address: {
    first_name: 'Terminal',
    last_name: 'Daniel Account',
    email: 'danielozeh@terminal.africa',
    phone: '+2348134277988',
    is_residential: true,
    line1: '045, Oladimeji street, Aguda',
    line2: '',
    city: 'Surulere',
    state: 'Lagos',
    country: 'NG',
    zip: '100001',
  },
  delivery_address: {
    first_name: 'Daniel',
    last_name: 'Ozeh',
    email: 'danielozeh@gmail.com',
    phone: '+2348134277988',
    is_residential: true,
    line1: 'EridanSpace, Obafemi Awolowo way,',
    line2: 'Alausa',
    city: 'Ikeja',
    state: 'Lagos',
    country: 'NG',
    zip: '100001',
  },
  parcel: {
    description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
    weight_unit: 'kg',
    items: [
      {
        description: 'Apple MacBook Pro with Charger, Wireless mouse and Keyboard',
        name: '0% off on Offer on deals',
        currency: 'NGN',
        value: 500,
        quantity: 1,
        weight: 2,
      },
    ],
    metadata: {},
  },
};

const shipment_id = 'SH-CDBXQFRWY181KJLA';

test('create shipment', async () => {
  const shipment: any = await TerminalAfrica.createShipment(shipment_data);
  expect(shipment.status).toBe(true);
});

test('create quick shipment', async () => {
  const shipment: any = await TerminalAfrica.createQuickShipment(quick_shipment_data);
  expect(shipment.status).toBe(true);
}, 20000);

test('update shipment', async () => {
  const shipment: any = await TerminalAfrica.createShipment(shipment_data);
  const update: any = await TerminalAfrica.updateShipment(shipment.data.shipment_id, shipment_data);
  expect(update.status).toBe(true);
}, 20000);

test('get shipments', async () => {
  const queryParams = `?page=1&perPage=1`;
  const shipments: any = await TerminalAfrica.getShipments(queryParams);
  expect(shipments.status).toBe(true);
}, 10000);

test('get shipment', async () => {
  const shipment: any = await TerminalAfrica.getShipment(shipment_id);
  expect(shipment.status).toBe(true);
});

test('track shipment', async () => {
  const shipment: any = await TerminalAfrica.trackShipment(shipment_id);
  expect(shipment.status).toBe(true);
});

test('duplicate shipment', async () => {
  const shipment: any = await TerminalAfrica.duplicateShipment(shipment_id);
  expect(shipment.status).toBe(true);
});

test('delete shipment', async () => {
  const shipment: any = await TerminalAfrica.createShipment(shipment_data);
  const is_deleted: any = await TerminalAfrica.deleteShipment(shipment.data.shipment_id);
  expect(is_deleted.status).toBe(true);
});
