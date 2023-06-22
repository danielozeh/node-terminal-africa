import terminalAfricaInstance from '../services/terminal_africa';

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
      const resp = await terminalAfricaInstance.get(`/rates/shipment${queryParams}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Quotes for Shipment - This allows you to fetch quick quotes on Terminal Africa
   * @param {Object[]} quotesData
   * @param {object} quotesData.pickup_address
   * @param {object} quotesData.delivery_address
   * @param {parcel} quotesData.parcel
   * @param {string=} quotesData.carrier_id
   * @param {string=} quotesData.currency
   * @param {string=} quotesData.cash_on_delivery
   * @returns object
   * @method POST
   */
  static async getQuotesForShipment(quotesData: object) {
    try {
      const resp = await terminalAfricaInstance.post(`/rates/shipment/quotes`, quotesData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Rates for Multi-Piece Shipment- This allows you to fetch rates for multi-piece shipments on Terminal Africa
   * @param {Object[]} rateData
   * @param {string=} rateData.currency
   * @param {string=} rateData.delivery_address
   * @param {array} rateData.parcels
   * @param {string=} rateData.pickup_address
   * @param {string=} rateData.shipment_id
   * @returns object
   * @method POST
   */
  static async getMultiPieceShipmentRates(rateData: object) {
    try {
      const resp = await terminalAfricaInstance.post(`/rates/multi/shipment`, rateData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
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
      const resp = await terminalAfricaInstance.get(`/rates${queryParams}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
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
      const resp = await terminalAfricaInstance.get(`/rates/${rateId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
}
