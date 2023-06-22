import terminalAfricaInstance from '../services/terminal_africa';

export default class Parcel {
  /**
   * Create Parcel - This allows you to create a parcel on Terminal Africa
   * @param {Object[]} parcel_data
   * @param {object} parcelData[].items
   * @param {string} parcelData[].packaging
   * @param {string} parcelData[].weight_unit
   * @param {string=} parcelData.metadata
   * @returns object
   * @method POST
   */
  static async createParcel(parcelData: object) {
    try {
      const resp = await terminalAfricaInstance.post(`/parcels`, parcelData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Update Parcel - This allows you to update an existing parcel on Terminal Africa
   * @param {string} parcelId
   * @param {Object[]} parcelData
   * @param {object} parcelData[].items
   * @param {string} parcelData[].packaging
   * @param {string} parcelData[].weight_unit
   * @param {string=} parcelData.metadata
   * @returns object
   * @method PUT
   */
  static async updateParcel(parcelId: string, parcelData: object) {
    try {
      const resp = await terminalAfricaInstance.put(`/parcels/${parcelId}`, parcelData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
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
      const resp = await terminalAfricaInstance.get(`/parcels${queryParams}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
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
      const resp = await terminalAfricaInstance.get(`/parcels/${parcelId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
}
