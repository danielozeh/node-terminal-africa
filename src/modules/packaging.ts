import terminalAfricaInstance from '../services/terminal_africa';

export default class Packaging {
  /**
   * Create Packaging - This allows you to create a packaging on Terminal Africa
   * @param {Object[]} packagingData
   * @param {int} packagingData[].height
   * @param {int} packagingData[].length
   * @param {string} packagingData[].name
   * @param {string} packagingData[].size_unit
   * @param {string} packagingData[].type
   * @param {int} packagingData[].width
   * @param {int} packagingData[].weight
   * @param {string} packagingData[].weight_unit
   * @returns object
   * @method POST
   */
  static async createPackaging(packagingData: object) {
    try {
      const resp = await terminalAfricaInstance.post(`/packaging`, packagingData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Update Packaging - This allows you to update an existing packaging on Terminal Africa
   * @param {string} packagingId
   * @param {Object[]} packagingData
   * @param {int} packagingData[].height
   * @param {int} packagingData[].length
   * @param {string} packagingData[].name
   * @param {string} packagingData[].size_unit
   * @param {string} packagingData[].type
   * @param {int} packagingData[].width
   * @param {int} packagingData[].weight
   * @param {string} packagingData[].weight_unit
   * @returns object
   * @method PUT
   */
  static async updatePackaging(packagingId: string, packagingData: object) {
    try {
      const resp = await terminalAfricaInstance.put(`/packaging/${packagingId}`, packagingData);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * GET Packagings- This allows you to fetch packagings on Terminal Africa
   * @param {string} queryParams
   * @param {string=} queryParams.page
   * @param {string=} queryParams.perPage
   * @param {string=} queryParams.type
   * @returns object
   * @method GET
   */
  static async getPackagings(queryParams: any) {
    try {
      const resp = await terminalAfricaInstance.get(`/packaging${queryParams}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * GET Packaging- This allows you to fetch a packaging on Terminal Africa
   * @param {string} packagingId
   * @returns object
   * @method GET
   */
  static async getPackaging(packagingId: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/packaging/${packagingId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Terminal Default Packaging - This allows you to get the default terminal packaging
   * @returns object
   * @method GET
   */
  static async terminalDefaultPackaging() {
    try {
      const resp = await terminalAfricaInstance.get(`/packaging/default/terminal`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
}
