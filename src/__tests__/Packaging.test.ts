import TerminalAfrica from '../index';

const packaging_data = {
  height: 10,
  name: 'My Standard Packaging',
  size_unit: 'cm',
  type: 'box',
  width: 20,
  weight: 1,
  weight_unit: 'kg',
  length: 11,
};

test('create packaging', async () => {
  const packaging: any = await TerminalAfrica.createPackaging(packaging_data);
  expect(packaging.status).toBe(true);
});

test('upate packaging', async () => {
  const packaging: any = await TerminalAfrica.createPackaging(packaging_data);
  const update: any = await TerminalAfrica.updatePackaging(packaging.data.packaging_id, packaging_data);
  expect(update.status).toBe(true);
});

test('get packagings', async () => {
  const queryParams = `?page=1&perPage=1&type=soft-packaging`;
  const packaging: any = await TerminalAfrica.getPackagings(queryParams);
  expect(packaging.status).toBe(true);
});

test('get packaging', async () => {
  const queryParams = `?page=1&perPage=1&type=soft-packaging`;
  const packagings: any = await TerminalAfrica.getPackagings(queryParams);
  const packaging: any = await TerminalAfrica.getPackaging(packagings.data.packaging[0].packaging_id);
  expect(packaging.status).toBe(true);
});

test('terminal default packaging', async () => {
  const packaging: any = await TerminalAfrica.terminalDefaultPackaging();
  expect(packaging.status).toBe(true);
});
