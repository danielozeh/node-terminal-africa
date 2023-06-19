import axios from "axios"
import config from "../config"

const terminalAfricaInstance = axios.create({
    baseURL: `${config.base_url}/v1`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.secret_key}`
    }
})

export default terminalAfricaInstance