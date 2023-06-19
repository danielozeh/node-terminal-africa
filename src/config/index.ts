import * as dotenv from 'dotenv'
dotenv.config()

dotenv.config();
const { env } = process;

export default {
    base_url: env.TERMINAL_AFRICA_URL,
    secret_key: env.TERMINAL_AFRICA_SECRET_KEY
}