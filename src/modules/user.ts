import terminalAfricaInstance from '../services/terminal_africa';

export default class User {
  /**
   * Get User - This allows you to fetch user information on Terminal Africa
   * @param {string} userId
   * @returns object
   * @method GET
   */
  static async getUser(userId: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/users/${userId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Wallet Info - This allows you to retrieve wallet information on Terminal Africa
   * @param {string} userId
   * @returns object
   * @method GET
   */
  static async walletInfo(userId: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/users/wallet?user_id=${userId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get Wallet Balance - This allows you to retrieve wallet balance on Terminal Africa
   * @param {string} userId
   * @returns object
   * @method GET
   */
  static async walletBalance(userId: string) {
    try {
      const resp = await terminalAfricaInstance.get(`/users/wallet-balance?user_id=${userId}`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }

  /**
   * Get User Carriers - This allows you to fetch acivated carriers on Terminal Africa
   * @returns object
   * @method GET
   */
  static async carriers() {
    try {
      const resp = await terminalAfricaInstance.get(`/users/carriers`);
      return resp.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
}
