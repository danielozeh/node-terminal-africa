import TerminalAfrica from '../index';

const webhook_data = {
    "name": "Test Webhook",
    "events": ["transaction.success"],
    "live": true,
    "url": "https://site.co"
}

test('create webhook', async () => {
    const webhook: any = await TerminalAfrica.createWebhook(webhook_data)
    expect(webhook.status).toBe(true)
});

test('delete webhook', async () => {
    const webhook: any = await TerminalAfrica.createWebhook(webhook_data)
    const deleteWebhook: any = await TerminalAfrica.deleteWebhook(webhook.data.webhook_id)
    expect(deleteWebhook.status).toBe(true)
});

test('disable webhook', async () => {
    const webhook: any = await TerminalAfrica.createWebhook(webhook_data)
    const disable: any = await TerminalAfrica.disableWebhook(webhook.data.webhook_id)
    expect(disable.status).toBe(true)
});

test('enable webhook', async () => {
    const webhook: any = await TerminalAfrica.createWebhook(webhook_data)
    const enable: any = await TerminalAfrica.enableWebhook(webhook.data.webhook_id)
    expect(enable.status).toBe(true)
});

test('get webhooks', async () => {
    const queryParams = `?page=1&perPage=1`
    const webhooks: any = await TerminalAfrica.getWebhooks(queryParams)
    expect(webhooks.status).toBe(true)
}, 10000);


test('get webhook', async () => {
    const queryParams = `?page=1&perPage=1`
    const webhooks: any = await TerminalAfrica.getWebhooks(queryParams)
    const webhook: any = await TerminalAfrica.getWebhook(webhooks.data.webhooks[0].webhook_id)
    expect(webhook.status).toBe(true)
});