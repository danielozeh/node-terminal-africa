import Address from "./modules/address";
import Carrier from "./modules/carriers";
import Packaging from "./modules/packaging";
import Parcel from "./modules/parcel";
import Rate from "./modules/rate";

export default class TerminalAfrica {
    static createAddress(address_data: object) {
        return Address.createAddress(address_data)
    }

    static updateAddress(addressId: string, address_data: object) {
        return Address.updateAddress(addressId, address_data)
    }

    static getAddresses(queryParams: any) {
        return Address.getAddresses(queryParams)
    }

    static getAddress(addressId: string) {
        return Address.getAddress(addressId)
    }

    static validateAddress(address_data: object) {
        return Address.validateAddress(address_data)
    }

    static setDefaultSenderAddress(address_data: object) {
        return Address.setDefaultSenderAddress(address_data)
    }
    
    static getDefaultSenderAddress() {
        return Address.getDefaultSenderAddress()
    }

    static getCarriers(queryParams: any) {
        return Carrier.getCarriers(queryParams)
    }

    static getCarrier(carrierId: string) {
        return Carrier.getCarrier(carrierId)
    }

    static enableCarrier(carrierId: string, queryParams: string) {
        return Carrier.enableCarrier(carrierId, queryParams)
    }

    static disableCarrier(carrierId: string, queryParams: string) {
        return Carrier.disableCarrier(carrierId, queryParams)
    }

    static enableMultipleCarrier(carriers: any) {
        return Carrier.enableMultipleCarrier(carriers)
    }

    static disableMultipleCarrier(carriers: any) {
        return Carrier.disableMultipleCarrier(carriers)
    }

    static createPackaging(packaging_data: object) {
        return Packaging.createPackaging(packaging_data)
    }

    static updatePackaging(packagingId: string, packaging_data: object) {
        return Packaging.updatePackaging(packagingId, packaging_data)
    }

    static getPackagings(queryParams: any) {
        return Packaging.getPackagings(queryParams)
    }

    static getPackaging(packagingId: string) {
        return Packaging.getPackaging(packagingId)
    }

    static terminalDefaultPackaging() {
       return Packaging.terminalDefaultPackaging()
    }

    static createParcel(parcel_data: object) {
        return Parcel.createParcel(parcel_data)
    }

    static updateParcel(parcelId: string, parcel_data: object) {
        return Parcel.updateParcel(parcelId, parcel_data)
    }

    static getParcels(queryParams: any) {
        return Parcel.getParcels(queryParams)
    }

    static getParcel(parcelId: string) {
        return Parcel.getParcel(parcelId)
    }

    static getShipmentRates(queryParams: string) {
       return Rate.getShipmentRates(queryParams)
    }

    static getQuotesForShipment(quotes_data: object) {
       return Rate.getQuotesForShipment(quotes_data)
    }

    static getMultiPieceShipmentRates(rate_data: object) {
        return Rate.getMultiPieceShipmentRates(rate_data)
    }

    static getRates(queryParams: any) {
        return Rate.getRates(queryParams)
    }

    static getRate(rateId: string) {
        return Rate.getRate(rateId)
    }
}