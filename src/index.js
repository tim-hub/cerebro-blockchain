import { getDifficulty } from './api'

export const fn = ({ term, display }) => {
  // Put your plugin code here

  let match = term.match(/^blockchain?\s(.+)$/)
  match = match || term.match(/^(.+)\sblockchain?$/)
  if (match) {
    let difficulty = getDifficulty();

    display({
      title: `Current Difficulty ${difficulty}`
    })
  }
}