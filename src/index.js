
const BASE_URL = 'https://blockchain.info/q'




export const fn = ({ term, display }) => {
  // Put your plugin code here
  // /^bloc?\s(.+)$/  /^(.+)\sbloc?$/
  let reg = /^bloc/
  let reg2 = /^bloc/
  let match = term.match(reg)
  match = match || term.match(reg2)
  if (match) {
    const request = require('request');

    let url = `${BASE_URL}/getdifficulty`

    request(url, { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }

      display({
        title: `Current Difficulty: ${res.body}`
      })

      console.log(res);

    });


  }
}