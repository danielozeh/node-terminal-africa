import TerminalAfrica from '../index';

test('get claims', async () => {
  const queryParams = `?page=1&perPage=1`;
  const claims: any = await TerminalAfrica.getClaims(queryParams);
  expect(claims.status).toBe(true);
}, 10000);
