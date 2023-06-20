import Address from "./modules/address";

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
}