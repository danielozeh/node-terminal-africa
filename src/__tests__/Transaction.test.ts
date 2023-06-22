import TerminalAfrica from '../index';
const wallet = '';

test('get transactions', async () => {
  const queryParams = `?page=1&perPage=1&wallet=${wallet}`;
  const transactions: any = await TerminalAfrica.getTransactions(queryParams);
  expect(transactions.status).toBe(true);
}, 10000);

test('get transaction', async () => {
  const queryParams = `?page=1&perPage=1&wallet=${wallet}`;
  const transactions: any = await TerminalAfrica.getTransactions(queryParams);
  const transaction: any = await TerminalAfrica.getTransaction(transactions.data.transactions[0].transaction_id);
  expect(transaction.status).toBe(true);
}, 10000);
