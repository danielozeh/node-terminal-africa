import terminalAfricaInstance from "../services/terminal_africa"

export default class Packaging {
    /**
     * Create Packaging - This allows you to create a packaging on Terminal Africa
     * @param {Object[]} packaging_data
     * @param {int} packaging_data[].height
     * @param {int} packaging_data[].length
     * @param {string} packaging_data[].name
     * @param {string} packaging_data[].size_unit
     * @param {string} packaging_data[].type
     * @param {int} packaging_data[].width
     * @param {int} packaging_data[].weight
     * @param {string} packaging_data[].weight_unit
     * @returns object
     * @method POST
     */
    static async createPackaging(packaging_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/packaging`, packaging_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Update Packaging - This allows you to update an existing packaging on Terminal Africa
     * @param {string} packagingId
     * @param {Object[]} packaging_data
     * @param {int} packaging_data[].height
     * @param {int} packaging_data[].length
     * @param {string} packaging_data[].name
     * @param {string} packaging_data[].size_unit
     * @param {string} packaging_data[].type
     * @param {int} packaging_data[].width
     * @param {int} packaging_data[].weight
     * @param {string} packaging_data[].weight_unit
     * @returns object
     * @method PUT
     */
    static async updatePackaging(packagingId: string, packaging_data: object) {
        try {
            const resp = await terminalAfricaInstance.put(`/packaging/${packagingId}`, packaging_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * GET Packagings- This allows you to fetch packagings on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @param {string=} queryParams.type
     * @returns object
     * @method GET
     */
    static async getPackagings(queryParams: any) {
        try {
            const resp = await terminalAfricaInstance.get(`/packaging${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * GET Packaging- This allows you to fetch a packaging on Terminal Africa
     * @param {string} packagingId
     * @returns object
     * @method GET
     */
    static async getPackaging(packagingId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/packaging/${packagingId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Terminal Default Packaging - This allows you to get the default terminal packaging
     * @returns object
     * @method GET
     */
    static async terminalDefaultPackaging() {
        try {
            const resp = await terminalAfricaInstance.get(`/packaging/default/terminal`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}