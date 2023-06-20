import terminalAfricaInstance from "../services/terminal_africa"

export default class Carrier {
    /**
     * Get Carriers - This allows you to fetch list of carriers on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @param {boolean} queryParams.active
     * @returns object
     * @method GET
     */
    static async getCarriers(queryParams: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/carriers${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Carrier - This allows you to fetch a carrier on Terminal Africa
     * @param {string} carrierId
     * @returns object
     * @method GET
     */
    static async getCarrier(carrierId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/carriers/${carrierId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Enable Carrier - This allows you to enable a carrier on Terminal Africa
     * @param {string} carrierId
     * @param {string} queryParams
     * @param {boolean} queryParams.domestic
     * @param {boolean} queryParams.regional
     * @param {boolean} queryParams.international
     * @returns object
     * @method POST
     */
    static async enableCarrier(carrierId: string, queryParams: string) {
        try {
            const resp = await terminalAfricaInstance.post(`/carriers/enable/${carrierId}${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Disable Carrier - This allows you to disable a carrier on Terminal Africa
     * @param {string} carrierId
     * * @param {string} queryParams
     * @param {boolean} queryParams.domestic
     * @param {boolean} queryParams.regional
     * @param {boolean} queryParams.international
     * @returns object
     * @method POST
     */
    static async disableCarrier(carrierId: string, queryParams: string) {
        try {
            const resp = await terminalAfricaInstance.post(`/carriers/disable/${carrierId}${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Enable Multiple Carrier - This allows you to enable multiple carriers on Terminal Africa
     * @param {array} carriers
     * @param {object} carriers.carrier
     * @param {string} carriers.carrier.carrier_id
     * @param {boolean} carriers.carrier.domestic
     * @param {boolean} carriers.carrier.regional
     * @param {boolean} carriers.carrier.international
     * @returns object
     * @method POST
     */
    static async enableMultipleCarrier(carriers: any) {
        try {
            const resp = await terminalAfricaInstance.post(`/carriers/multiple/enable`, carriers)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Disable Multiple Carrier - This allows you to disable multiple carriers on Terminal Africa
     * @param {array} carriers
     * @param {object} carriers.carrier
     * @param {string} carriers.carrier.carrier_id
     * @param {boolean} carriers.carrier.domestic
     * @param {boolean} carriers.carrier.regional
     * @param {boolean} carriers.carrier.international
     * @returns object
     * @method POST
     */
    static async disableMultipleCarrier(carriers: any) {
        try {
            const resp = await terminalAfricaInstance.post(`/carriers/multiple/disable`, carriers)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}