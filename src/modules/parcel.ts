import terminalAfricaInstance from "../services/terminal_africa"

export default class Parcel {
    /**
     * Create Parcel - This allows you to create a parcel on Terminal Africa
     * @param {Object[]} parcel_data
     * @param {object} parcel_data[].items
     * @param {string} parcel_data[].packaging
     * @param {string} parcel_data[].weight_unit
     * @param {string=} parcel_data.metadata
     * @returns object
     * @method POST
     */
    static async createParcel(parcel_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/parcels`, parcel_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Update Parcel - This allows you to update an existing parcel on Terminal Africa
     * @param {string} parcelId
     * @param {Object[]} parcel_data
     * @param {object} parcel_data[].items
     * @param {string} parcel_data[].packaging
     * @param {string} parcel_data[].weight_unit
     * @param {string=} parcel_data.metadata
     * @returns object
     * @method PUT
     */
    static async updateParcel(parcelId: string, parcel_data: object) {
        try {
            const resp = await terminalAfricaInstance.put(`/parcels/${parcelId}`, parcel_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * GET Parcels- This allows you to fetch parcels on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @returns object
     * @method GET
     */
    static async getParcels(queryParams: any) {
        try {
            const resp = await terminalAfricaInstance.get(`/parcels${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * GET Parcel- This allows you to fetch a parcel on Terminal Africa
     * @param {string} parcelId
     * @returns object
     * @method GET
     */
    static async getParcel(parcelId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/parcels/${parcelId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}