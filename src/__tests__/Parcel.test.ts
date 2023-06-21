import TerminalAfrica from '../index';

const parcel_data = {
    description: "Apple MacBook Pro with Charger, Wireless mouse and Keyboard",
    packaging: "",
    weight_unit: "kg",
    items: [
        {
            description: "Apple MacBook Pro with Charger, Wireless mouse and Keyboard",
            name: "0% off on Offer on deals",
            currency: "NGN",
            value: 0.5,
            quantity: 1,
            weight: 10
        }
    ],
    metadata: {}
}

test('create parcel', async () => {
    // get default packaging
    const packaging = await TerminalAfrica.terminalDefaultPackaging();
    parcel_data.packaging = packaging.data.packaging_id
    const parcel: any = await TerminalAfrica.createParcel(parcel_data)
    expect(parcel.status).toBe(true)
});

test('upate parcel', async () => {
    const packaging = await TerminalAfrica.terminalDefaultPackaging();
    parcel_data.packaging = packaging.data.packaging_id
    const parcel: any = await TerminalAfrica.createParcel(parcel_data)
    const update: any  = await TerminalAfrica.updateParcel(parcel.data.parcel_id, parcel_data)
    expect(update.status).toBe(true)
});

test('get parcels', async () => {
    const queryParams = `?page=1&perPage=1`
    const parcel: any = await TerminalAfrica.getParcels(queryParams)
    expect(parcel.status).toBe(true)
});

test('get parcel', async () => {
    const queryParams = `?page=1&perPage=1`
    const parcels: any = await TerminalAfrica.getParcels(queryParams)
    const parcel: any = await TerminalAfrica.getParcel(parcels.data.parcels[0].parcel_id)
    expect(parcel.status).toBe(true)
});