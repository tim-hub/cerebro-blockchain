import { memoize } from 'cerebro-tools'
import { head, prop, curry, tryCatch } from 'ramda'

const BASE_URL = 'https://blockchain.info/q'

const lifetime = { maxAge: 1000 * 3600 }

const getDifficulty = memoize (
  fetch(`${BASE_URL}/getblockcount`).then(response => response.json()),
  lifetime
)