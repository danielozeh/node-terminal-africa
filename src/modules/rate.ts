import terminalAfricaInstance from "../services/terminal_africa"

export default class Rate {
    /**
     * Get Rates for Shipments - This allows you to fetch shipment rates on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.currency
     * @param {string=} queryParams.delivery_address
     * @param {string=} queryParams.pickup_address
     * @param {string=} queryParams.parcel_id
     * @param {string=} queryParams.shipment_id
     * @param {boolean=} queryParams.cash_on_delivery
     * @param {string=} queryParams.carrier_id
     * @returns object
     * @method GET
     */
    static async getShipmentRates(queryParams: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/rates/shipment${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Quotes for Shipment - This allows you to fetch quick quotes on Terminal Africa
     * @param {Object[]} quotes_data
     * @param {object} quotes_data.pickup_address
     * @param {object} quotes_data.delivery_address
     * @param {parcel} quotes_data.parcel
     * @param {string=} quotes_data.carrier_id
     * @param {string=} quotes_data.currency
     * @param {string=} quotes_data.cash_on_delivery
     * @returns object
     * @method POST
     */
    static async getQuotesForShipment(quotes_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/rates/shipment/quotes`, quotes_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Rates for Multi-Piece Shipment- This allows you to fetch rates for multi-piece shipments on Terminal Africa
     * @param {Object[]} rate_data
     * @param {string=} rate_data.currency
     * @param {string=} rate_data.delivery_address
     * @param {array} rate_data.parcels
     * @param {string=} rate_data.pickup_address
     * @param {string=} rate_data.shipment_id
     * @returns object
     * @method POST
     */
    static async getMultiPieceShipmentRates(rate_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/rates/multi/shipment`, rate_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Rates- This allows you to fetch generated rates on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @returns object
     * @method GET
     */
    static async getRates(queryParams: any) {
        try {
            const resp = await terminalAfricaInstance.get(`/rates${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Rate- This allows you to fetch a rate on Terminal Africa
     * @param {string} rateId
     * @returns object
     * @method GET
     */
    static async getRate(rateId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/rates/${rateId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}