import terminalAfricaInstance from "../services/terminal_africa"

export default class Rate {
    /**
     * Create Shipment - This allows you to create a shipment on Terminal Africa
     * @param {Object[]} shipment_data
     * @param {string} shipment_data[].address_from
     * @param {string} shipment_data[].address_to
     * @param {string=} shipment_data[].address_to
     * @param {string=} shipment_data[].metadata
     * @param {string=} shipment_data[].parcel
     * @param {array} shipment_data[].parcels
     * @param {string} shipment_data[].shipment_purpose
     * @param {string} shipment_data[].shipment_type
     * @returns object
     * @method POST
     */
    static async createShipment(shipment_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/shipments`, shipment_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Create Quick Shipment - This allows you to create a quick shipment on Terminal Africa
     * @param {Object[]} shipment_data
     * @param {object} shipment_data[].pickup_address
     * @param {object} shipment_data[].delivery_address
     * @param {object} shipment_data[].parcel
     * @param {string=} shipment_data[].metadata
     * @param {string} shipment_data[].shipment_purpose
     * @param {string} shipment_data[].shipment_type
     * @returns object
     * @method POST
     */
    static async createQuickShipment(shipment_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/shipments/quick`, shipment_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Update Shipment - This allows you to update an existing shipment on Terminal Africa
     * @param {string} shipmentId
     * @param {Object[]} shipment_data
     * @param {string} shipment_data[].address_from
     * @param {string} shipment_data[].address_to
     * @param {string=} shipment_data[].address_to
     * @param {string=} shipment_data[].metadata
     * @param {string=} shipment_data[].parcel
     * @param {array} shipment_data[].parcels
     * @param {string} shipment_data[].shipment_purpose
     * @param {string} shipment_data[].shipment_type
     * @returns object
     * @method PUT
     */
    static async updateShipment(shipmentId: string, shipment_data: object) {
        try {
            const resp = await terminalAfricaInstance.put(`/shipments/${shipmentId}`, shipment_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Shipments- This allows you to fetch shipments on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @param {string=} queryParams.populate
     * @param {string=} queryParams.status
     * @returns object
     * @method GET
     */
    static async getShipments(queryParams: any) {
        try {
            const resp = await terminalAfricaInstance.get(`/shipments${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Shipment- This allows you to fetch a shipment on Terminal Africa
     * @param {string} shipmentId
     * @returns object
     * @method GET
     */
    static async getShipment(shipmentId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/shipments/${shipmentId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Track Shipment- This allows you to track a shipment on Terminal Africa
     * @param {string} shipmentId
     * @returns object
     * @method GET
     */
    static async trackShipment(shipmentId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/shipments/track/${shipmentId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Cancel Shipment - This allows you to cancel an existing shipment on Terminal Africa
     * @param {string} shipmentId
     * @returns object
     * @method POST
     */
    static async cancelShipment(shipmentId: string) {
        try {
            const resp = await terminalAfricaInstance.post(`/shipments/cancel`, {shipment_id: shipmentId})
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Delete Shipment - This allows you to delete an existing shipment on Terminal Africa
     * @param {string} shipmentId
     * @returns object
     * @method DELETE
     */
    static async deleteShipment(shipmentId: string) {
        try {
            const resp = await terminalAfricaInstance.delete(`/shipments`, {data: {shipment_id: shipmentId}})
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Duplicate Shipment - This allows you to duplicate an existing shipment on Terminal Africa
     * @param {string} shipmentId
     * @returns object
     * @method POST
     */
    static async duplicateShipment(shipmentId: string) {
        try {
            const resp = await terminalAfricaInstance.post(`/shipments/duplicate`, {shipment_id: shipmentId})
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

     /**
     * Arrange Pickup & Delivery - This allows you to arrange a pickup for delivery on Terminal Africa
     * @param {Object[]} shipment_data
     * @param {string} shipment_data[].rate_id
     * @param {string=} shipment_data[].shipment_id
     * @param {boolean=} shipment_data[].purchase_insurance
     * @param {int=} shipment_data[].cash_to_collect
     * @param {string} shipment_data[].shipment_purpose
     * @returns object
     * @method POST
     */
     static async arrangePickup(shipment_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/shipments/pickup`, shipment_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}