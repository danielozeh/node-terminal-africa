import terminalAfricaInstance from "../services/terminal_africa"

export default class Address {
    /**
     * Create Address - This allows you to create an address on Terminal Africa
     * @param {Object[]} address_data
     * @param {string} address_data[].country
     * @param {string} address_data[].state
     * @param {string} address_data[].city
     * @param {string=} address_data[].first_name
     * @param {string=} address_data[].last_name
     * @param {string=} address_data[].email
     * @param {boolean=} address_data[].is_residential
     * @param {string=} address_data[].line1
     * @param {string=} address_data[].line2
     * @param {object=} address_data[].metadata
     * @param {string=} address_data[].phone
     * @param {string=} address_data[].zip
     * @returns object
     * @method POST
     */
    static async createAddress(address_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/addresses`, address_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Update Address - This allows you to update an existing address on Terminal Africa
     * @param {string} addressId
     * @param {Object[]} address_data
     * @param {string} address_data[].country
     * @param {string} address_data[].state
     * @param {string} address_data[].city
     * @param {string=} address_data[].first_name
     * @param {string=} address_data[].last_name
     * @param {string=} address_data[].email
     * @param {boolean=} address_data[].is_residential
     * @param {string=} address_data[].line1
     * @param {string=} address_data[].line2
     * @param {object=} address_data[].metadata
     * @param {string=} address_data[].phone
     * @param {string=} address_data[].zip
     * @returns object
     * @method PUT
     */
    static async updateAddress(addressId: string, address_data: object) {
        try {
            const resp = await terminalAfricaInstance.put(`/addresses/${addressId}`, address_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * GET Addresses- This allows you to fetch addresses on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @returns object
     * @method GET
     */
    static async getAddresses(queryParams: any) {
        try {
            const resp = await terminalAfricaInstance.get(`/addresses${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * GET Addresses- This allows you to fetch an address on Terminal Africa
     * @param {string} addressId
     * @returns object
     * @method GET
     */
    static async getAddress(addressId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/addresses/${addressId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Validate Address - This allows you to validate an address on Terminal Africa
     * @param {Object[]} address_data
     * @param {string} address_data[].country
     * @param {string} address_data[].state
     * @param {string} address_data[].city
     * @param {string=} address_data[].zip
     * @returns object
     * @method POST
     */
    static async validateAddress(address_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/addresses/validate`, address_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Set Sender Default Address - This allows you to set an address on Terminal Africa as default
     * @param {Object[]} address_data
     * @param {string} address_data[].address_id
     * @returns object
     * @method POST
     */
    static async setDefaultSenderAddress(address_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/addresses/default/sender`, address_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Set Default Sender Address - This allows you to get default sender address on Terminal Africa
     * @returns object
     * @method GET
     */
    static async getDefaultSenderAddress() {
        try {
            const resp = await terminalAfricaInstance.get(`/addresses/default/sender`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}