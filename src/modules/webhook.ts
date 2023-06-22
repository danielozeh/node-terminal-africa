import terminalAfricaInstance from "../services/terminal_africa"

export default class Webhook {
    /**
     * Create Webhook - This allows you to create webhooks on Terminal Africa
     * @param {Object[]} webhook_data
     * @param {boolean} webhook_data[].active
     * @param {array} webhook_data[].events
     * @param {boolean} webhook_data[].live
     * @param {name} webhook_data[].name
     * @param {string} webhook_data[].url
     * @returns object
     * @method POST
     */
    static async createWebhook(webhook_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/webhooks`, webhook_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Update Webhook - This allows you to update existing webhooks on Terminal Africa
     * @param {string} webhookId
     * @param {Object[]} webhook_data
     * @param {boolean} webhook_data[].active
     * @param {array} webhook_data[].events
     * @param {boolean} webhook_data[].live
     * @param {name} webhook_data[].name
     * @param {string} webhook_data[].url
     * @returns object
     * @method PUT
     */
    static async updateWebhook(webhookId: string, webhook_data: object) {
        try {
            const resp = await terminalAfricaInstance.put(`/webhooks/${webhookId}`, webhook_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Webhooks - This allows you to fetch webhooks on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @returns object
     * @method GET
     */
    static async getWebhooks(queryParams: any) {
        try {
            const resp = await terminalAfricaInstance.get(`/webhooks${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Webhook - This allows you to fetch a webhook on Terminal Africa
     * @param {string} webhookId
     * @returns object
     * @method GET
     */
    static async getWebhook(webhookId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/webhooks/${webhookId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

     /**
     * Delete Webhook - This allows you to delete a webhook on Terminal Africa
     * @param {string} webhookId
     * @returns object
     * @method DELETE
     */
     static async deleteWebhook(webhookId: string) {
        try {
            const resp = await terminalAfricaInstance.delete(`/webhooks/${webhookId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Enable Webhook - This allows you to enable a webhook on Terminal Africa
     * @param {string} webhookId
     * @returns object
     * @method POST
     */
    static async enableWebhook(webhookId: string) {
        try {
            const resp = await terminalAfricaInstance.post(`/webhooks/enable/${webhookId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Disable Webhook - This allows you to disable a webhook on Terminal Africa
     * @param {string} webhookId
     * @returns object
     * @method POST
     */
    static async disableWebhook(webhookId: string) {
        try {
            const resp = await terminalAfricaInstance.post(`/webhooks/disable/${webhookId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}