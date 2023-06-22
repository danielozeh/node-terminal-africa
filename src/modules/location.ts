import terminalAfricaInstance from "../services/terminal_africa"

export default class Location {
    /**
     * Get Countries - This allows you to fetch countries on Terminal Africa
     * @returns object
     * @method GET
     */
    static async countries() {
        try {
            const resp = await terminalAfricaInstance.get(`/countries`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get States - This allows you to fetch list of states on Terminal Africa
     * @param {string} countryCode
     * @returns object
     * @method GET
     */
    static async states(countryCode: string) {
        try {
            const resp = await terminalAfricaInstance.get(`/states?country_code=${countryCode}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }

    /**
     * Get Cities - This allows you to fetch list of cities on Terminal Africa
     * @param {string} countryCode
     * @param {string=} stateCode
     * @returns object
     * @method GET
     */
    static async cities(countryCode: string, stateCode: string = '') {
        try {
            let queryParams = `?country_code=${countryCode}`
            if(stateCode) {
                queryParams = `?country_code=${countryCode}&state_code=${stateCode}`
            }
            const resp = await terminalAfricaInstance.get(`/cities${queryParams}`)
            return resp.data
        } catch(err: any) {
            return err.response.data
        }
    }
}