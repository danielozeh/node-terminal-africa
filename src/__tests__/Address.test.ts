import TerminalAfrica from '../index';

const address_data = {
    "first_name": "Daniel",
    "last_name": "Ozeh",
    "email": "danielozeh@gmail.com",
    "phone": "+2348134277988",
    "is_residential": true,
    "line1": "The Phillipi centre, Oluwalogbon House",
    "line2": "Obafemii Awolowo way, Alausa, Ikeja",
    "city": "Ikeja",
    "state": "Lagos",
    "country": "NG",
    "zip": "100123",
}

test('Testing create terminal address', async () => {
    const address : any = await TerminalAfrica.createAddress(address_data)
    expect(address.status).toBe(true)
});

test('Update terminal address', async () => {
    const create_address : any = await TerminalAfrica.createAddress(address_data)
    const update_address: any = await TerminalAfrica.updateAddress(create_address.data.address_id, address_data)
    expect(update_address.status).toBe(true)
});

test('Get terminal addresses', async () => {
    const queryParams = `?page=1&perPage=10`
    const addresses: any = await TerminalAfrica.getAddresses(queryParams)
    expect(addresses.status).toBe(true)
});

test('get terminal address', async () => {
    const create_address : any = await TerminalAfrica.createAddress(address_data)
    const address: any = await TerminalAfrica.getAddress(create_address.data.address_id)
    expect(address.status).toBe(true)
});

test('validate terminal address', async () => {
    const address : any = await TerminalAfrica.validateAddress(address_data)
    expect(address.status).toBe(true)
});

test('set default terminal address', async () => {
    const create_address : any = await TerminalAfrica.createAddress(address_data)
    const address: any = await TerminalAfrica.setDefaultSenderAddress({address_id: create_address.data.address_id})
    expect(address.status).toBe(true)
});

test('get default terminal address', async () => {
    const address: any = await TerminalAfrica.getDefaultSenderAddress()
    expect(address.status).toBe(true)
});