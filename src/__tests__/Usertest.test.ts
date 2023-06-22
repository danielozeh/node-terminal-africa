import TerminalAfrica from '../index';
const userId = 'USER-';

test('get user', async () => {
  const user: any = await TerminalAfrica.getUser(userId);
  expect(user.status).toBe(true);
}, 10000);

test('get user wallet', async () => {
  const wallet: any = await TerminalAfrica.walletInfo(userId);
  expect(wallet.status).toBe(true);
}, 10000);

test('get user wallet balance', async () => {
  const wallet: any = await TerminalAfrica.walletBalance(userId);
  expect(wallet.status).toBe(true);
}, 10000);

test('get user carriers', async () => {
  const carriers: any = await TerminalAfrica.carriers();
  expect(carriers.status).toBe(true);
}, 10000);
