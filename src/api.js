import { memoize } from 'cerebro-tools'
import { head, prop, curry, tryCatch } from 'ramda'

const BASE_URL = 'https://blockchain.info/q'

const lifetime = { maxAge: 1000 * 3600 }