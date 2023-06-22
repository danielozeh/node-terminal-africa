import terminalAfricaInstance from '../services/terminal_africa';

export default class Address {
  /**
   * Create Address - This allows you to create an address on Terminal Africa
   * @param {Object[]} addressData
   * @param {string} addressData[].country
   * @param {string} addressData[].state
   * @param {string} addressData[].city
   * @param {string=} addressData[].first_name
   * @param {string=} addressData[].last_name
   * @param {string=} addressData[].email
   * @param {boolean=} addressData[].is_residential
   * @param {string=} addressData[].line1
   * @param {string=} addressData[].line2
   * @param {object=} addressData[].metadata
   * @param {string=} addressData[].phone
   * @param {string=} addressData[].zip
   * @returns object
   * @method POST
   */
  static async createAddress(addressData: object) {
    try {
      const resp = await terminalAfricaInstance.post(`/addresses`, addressData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Update Address - This allows you to update an existing address on Terminal Africa
   * @param {string} addressId
   * @param {Object[]} addressData
   * @param {string} addressData[].country
   * @param {string} addressData[].state
   * @param {string} addressData[].city
   * @param {string=} addressData[].first_name
   * @param {string=} addressData[].last_name
   * @param {string=} addressData[].email
   * @param {boolean=} addressData[].is_residential
   * @param {string=} addressData[].line1
   * @param {string=} addressData[].line2
   * @param {object=} addressData[].metadata
   * @param {string=} addressData[].phone
   * @param {string=} addressData[].zip
   * @returns object
   * @method PUT
   */
  static async updateAddress(addressId: string, addressData: object) {
    try {
      const resp = await terminalAfricaInstance.put(`/addresses/${addressId}`, addressData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * GET Addresses- This allows you to fetch addresses on Terminal Africa
   * @param {string} queryParams
   * @param {string=} queryParams.page
   * @param {string=} queryParams.perPage
   * @returns object
   * @method GET
   */
  static async getAddresses(queryParams: any) {
    try {
      const resp = await terminalAfricaInstance.get(`/addresses${queryParams}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * GET Addresses- This allows you to fetch an address on Terminal Africa
   * @param {string} addressId
   * @returns object
   * @method GET
   */
  static async getAddress(addressId: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/addresses/${addressId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Validate Address - This allows you to validate an address on Terminal Africa
   * @param {Object[]} addressData
   * @param {string} addressData[].country
   * @param {string} addressData[].state
   * @param {string} addressData[].city
   * @param {string=} addressData[].zip
   * @returns object
   * @method POST
   */
  static async validateAddress(addressData: object) {
    try {
      const resp = await terminalAfricaInstance.post(`/addresses/validate`, addressData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Set Sender Default Address - This allows you to set an address on Terminal Africa as default
   * @param {Object[]} addressData
   * @param {string} addressData[].address_id
   * @returns object
   * @method POST
   */
  static async setDefaultSenderAddress(addressData: object) {
    try {
      const resp = await terminalAfricaInstance.post(`/addresses/default/sender`, addressData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Set Default Sender Address - This allows you to get default sender address on Terminal Africa
   * @returns object
   * @method GET
   */
  static async getDefaultSenderAddress() {
    try {
      const resp = await terminalAfricaInstance.get(`/addresses/default/sender`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
}
