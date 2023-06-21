import terminalAfricaInstance from "../services/terminal_africa"

export default class Transaction {
    /**
     * Get Transactions - This allows you to fetch transactions on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @param {string} queryParams.wallet
     * @returns object
     * @method GET
     */
    static async getTransactions(queryParams: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/transactions${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Transaction - This allows you to fetch transaction details on Terminal Africa
     * @param {string} transactionId
     * @returns object
     * @method GET
     */
    static async getTransaction(transactionId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/transactions/${transactionId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}