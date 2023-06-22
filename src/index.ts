import Address from './modules/address';
import Carrier from './modules/carriers';
import Claim from './modules/claim';
import Insurance from './modules/insurance';
import Packaging from './modules/packaging';
import Parcel from './modules/parcel';
import Rate from './modules/rate';
import Shipment from './modules/shipment';
import Transaction from './modules/transaction';
import User from './modules/user';
import Webhook from './modules/webhook';
import Location from './modules/location';

export default class TerminalAfrica {
  static createAddress(addressData: object) {
    return Address.createAddress(addressData);
  }

  static updateAddress(addressId: string, addressData: object) {
    return Address.updateAddress(addressId, addressData);
  }

  static getAddresses(queryParams: any) {
    return Address.getAddresses(queryParams);
  }

  static getAddress(addressId: string) {
    return Address.getAddress(addressId);
  }

  static validateAddress(addressData: object) {
    return Address.validateAddress(addressData);
  }

  static setDefaultSenderAddress(addressData: object) {
    return Address.setDefaultSenderAddress(addressData);
  }

  static getDefaultSenderAddress() {
    return Address.getDefaultSenderAddress();
  }

  static getCarriers(queryParams: any) {
    return Carrier.getCarriers(queryParams);
  }

  static getCarrier(carrierId: string) {
    return Carrier.getCarrier(carrierId);
  }

  static enableCarrier(carrierId: string, queryParams: string) {
    return Carrier.enableCarrier(carrierId, queryParams);
  }

  static disableCarrier(carrierId: string, queryParams: string) {
    return Carrier.disableCarrier(carrierId, queryParams);
  }

  static enableMultipleCarrier(carriers: any) {
    return Carrier.enableMultipleCarrier(carriers);
  }

  static disableMultipleCarrier(carriers: any) {
    return Carrier.disableMultipleCarrier(carriers);
  }

  static createPackaging(packagingData: object) {
    return Packaging.createPackaging(packagingData);
  }

  static updatePackaging(packagingId: string, packagingData: object) {
    return Packaging.updatePackaging(packagingId, packagingData);
  }

  static getPackagings(queryParams: any) {
    return Packaging.getPackagings(queryParams);
  }

  static getPackaging(packagingId: string) {
    return Packaging.getPackaging(packagingId);
  }

  static terminalDefaultPackaging() {
    return Packaging.terminalDefaultPackaging();
  }

  static createParcel(parcelData: object) {
    return Parcel.createParcel(parcelData);
  }

  static updateParcel(parcelId: string, parcelData: object) {
    return Parcel.updateParcel(parcelId, parcelData);
  }

  static getParcels(queryParams: any) {
    return Parcel.getParcels(queryParams);
  }

  static getParcel(parcelId: string) {
    return Parcel.getParcel(parcelId);
  }

  static getShipmentRates(queryParams: string) {
    return Rate.getShipmentRates(queryParams);
  }

  static getQuotesForShipment(quotesData: object) {
    return Rate.getQuotesForShipment(quotesData);
  }

  static getMultiPieceShipmentRates(rateData: object) {
    return Rate.getMultiPieceShipmentRates(rateData);
  }

  static getRates(queryParams: any) {
    return Rate.getRates(queryParams);
  }

  static getRate(rateId: string) {
    return Rate.getRate(rateId);
  }

  static createShipment(shipmentData: object) {
    return Shipment.createShipment(shipmentData);
  }

  static createQuickShipment(shipmentData: object) {
    return Shipment.createQuickShipment(shipmentData);
  }

  static updateShipment(shipmentId: string, shipmentData: object) {
    return Shipment.updateShipment(shipmentId, shipmentData);
  }

  static getShipments(queryParams: any) {
    return Shipment.getShipments(queryParams);
  }

  static getShipment(shipmentId: string) {
    return Shipment.getShipment(shipmentId);
  }

  static trackShipment(shipmentId: string) {
    return Shipment.trackShipment(shipmentId);
  }

  static cancelShipment(shipmentId: string) {
    return Shipment.cancelShipment(shipmentId);
  }

  static deleteShipment(shipmentId: string) {
    return Shipment.deleteShipment(shipmentId);
  }

  static duplicateShipment(shipmentId: string) {
    return Shipment.duplicateShipment(shipmentId);
  }

  static arrangePickup(shipmentData: object) {
    return Shipment.arrangePickup(shipmentData);
  }

  static getInsuranceList(queryParams: string) {
    return Insurance.getInsuranceList(queryParams);
  }

  static getInsurance(insuranceId: string) {
    return Insurance.getInsurance(insuranceId);
  }

  static getInsuranceUsingShipment(shipmentId: string) {
    return Insurance.getInsuranceUsingShipment(shipmentId);
  }

  static getInsurancePremium(parcelId: string) {
    return Insurance.getInsurancePremium(parcelId);
  }

  static getInsurancePremiumUsingParcelValue(parcelData: object) {
    return Insurance.getInsurancePremiumUsingParcelValue(parcelData);
  }

  static purchaseInsurance(shipment: string) {
    return Insurance.purchaseInsurance(shipment);
  }

  static getClaims(queryParams: string) {
    return Claim.getClaims(queryParams);
  }

  static getClaim(claimId: string) {
    return Claim.getClaim(claimId);
  }

  static fileClaim(claimData: object) {
    return Claim.fileClaim(claimData);
  }

  static getTransactions(queryParams: string) {
    return Transaction.getTransactions(queryParams);
  }

  static getTransaction(transactionId: string) {
    return Transaction.getTransaction(transactionId);
  }

  static getUser(userId: string) {
    return User.getUser(userId);
  }

  static walletInfo(userId: string) {
    return User.walletInfo(userId);
  }

  static walletBalance(userId: string) {
    return User.walletBalance(userId);
  }

  static carriers() {
    return User.carriers();
  }

  static createWebhook(webhookData: object) {
    return Webhook.createWebhook(webhookData);
  }

  static updateWebhook(webhookId: string, webhookData: object) {
    return Webhook.updateWebhook(webhookId, webhookData);
  }

  static getWebhooks(queryParams: any) {
    return Webhook.getWebhooks(queryParams);
  }

  static getWebhook(webhookId: string) {
    return Webhook.getWebhook(webhookId);
  }

  static deleteWebhook(webhookId: string) {
    return Webhook.deleteWebhook(webhookId);
  }

  static enableWebhook(webhookId: string) {
    return Webhook.enableWebhook(webhookId);
  }

  static disableWebhook(webhookId: string) {
    return Webhook.disableWebhook(webhookId);
  }

  static countries() {
    return Location.countries();
  }

  static states(countryCode: string) {
    return Location.states(countryCode);
  }

  static cities(countryCode: string, stateCode: string = '') {
    return Location.cities(countryCode, stateCode);
  }
}
