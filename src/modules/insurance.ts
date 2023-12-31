import terminalAfricaInstance from '../services/terminal_africa';

export default class Insurance {
  /**
   * Get Insurance List - This allows you to fetch insurance lists on Terminal Africa
   * @param {string} queryParams
   * @param {string=} queryParams.page
   * @param {string=} queryParams.perPage
   * @param {string=} queryParams.status
   * @returns object
   * @method GET
   */
  static async getInsuranceList(queryParams: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/insurance${queryParams}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Insurance - This allows you to fetch insurance details on Terminal Africa
   * @param {string} insuranceId
   * @returns object
   * @method GET
   */
  static async getInsurance(insuranceId: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/insurance/${insuranceId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Insurance Using Shipment ID - This allows you to fetch insurance details on Terminal Africa
   * @param {string} shipmentId
   * @returns object
   * @method GET
   */
  static async getInsuranceUsingShipment(shipmentId: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/insurance/${shipmentId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Insurance Premium - This allows you to calculate insurance premium on Terminal Africa
   * @param {string} parcelId
   * @returns object
   * @method GET
   */
  static async getInsurancePremium(parcelId: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/insurance/premium?parcel=${parcelId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Insurance Premium Using Parcel Value - This allows you to calculate insurance premium on Terminal Africa
   * @param {string} parcelData
   * @returns object
   * @method POST
   */
  static async getInsurancePremiumUsingParcelValue(parcelData: object) {
    try {
      const resp = await terminalAfricaInstance.post(`/insurance/premium`, parcelData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Purchase Insurance- This allows you to purchase insurance for a shipment on Terminal Africa
   * @param {string} shipment
   * @returns object
   * @method POST
   */
  static async purchaseInsurance(shipment: string) {
    try {
      const resp = await terminalAfricaInstance.post(`/insurance/purchase`, { shipment });
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
}
