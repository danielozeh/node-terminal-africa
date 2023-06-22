import TerminalAfrica from '../index';

test('get insurance premium using value', async () => {
  const insurance: any = await TerminalAfrica.getInsurancePremiumUsingParcelValue({
    currency: 'NGN',
    parcel_value: 2000,
  });
  expect(insurance.status).toBe(true);
});

test('get insurance list', async () => {
  const queryParams = `?page=1&perPage=1`;
  const insurance: any = await TerminalAfrica.getInsuranceList(queryParams);
  expect(insurance.status).toBe(true);
}, 10000);
