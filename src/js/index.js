import {handleSelectP1} from './event-handlers.js'

const state = {
  // O || X
  P1: 'O',
}
// for debug
window.state = state

const containerX = document.getElementById('x-mark')
const containerO = document.getElementById('o-mark')

containerX.addEventListener('click', () => handleSelectP1('X', state))
containerO.addEventListener('click', () => handleSelectP1('O', state))
