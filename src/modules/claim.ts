import terminalAfricaInstance from "../services/terminal_africa"

export default class Claim {
    /**
     * Get Claims - This allows you to fetch claims on Terminal Africa
     * @param {string} queryParams
     * @param {string=} queryParams.page
     * @param {string=} queryParams.perPage
     * @param {string=} queryParams.status
     * @returns object
     * @method GET
     */
    static async getClaims(queryParams: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/claims${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Claim - This allows you to fetch claim details on Terminal Africa
     * @param {string} claimId
     * @returns object
     * @method GET
     */
    static async getClaim(claimId: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/claims/${claimId}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * File Claim - This allows you to calculate insurance premium on Terminal Africa
     * @param {Object[]} claim_data
     * @param {object} claim_data.claim
     * @param {string} claim_data.insurance
     * @returns object
     * @method POST
     */
    static async fileClaim(claim_data: object) {
        try {
            const resp = await terminalAfricaInstance.post(`/claims`, claim_data)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}