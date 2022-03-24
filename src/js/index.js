import {handleSelectP1, handleStartGame} from './event-handlers.js'

export const state = {
  P1: 'O', // O || X
  mode: null, // 'CPU' || '1V1'
}
// for debug
window.state = state

export const domNodes = {
  containerX: document.getElementById('x-mark'),
  containerO: document.getElementById('o-mark'),
  startGameCPU: document.querySelector('.cpu-btn'),
  startGame1v1: document.querySelector('.player-btn'),
  imageX: document.getElementById('x-mark-logo'),
  imageO: document.getElementById('o-mark-logo'),
  menuContainer: document.querySelector('.new-game-container'),
  gameContainer: document.querySelector('.game-start-container'),
  currentTurnX: document.querySelector('.current-turn-x'),
  currentTurnO: document.querySelector('.current-turn-o'),
}

window.nodes = domNodes

domNodes.containerX.addEventListener('click', () => handleSelectP1('X', state))
domNodes.containerO.addEventListener('click', () => handleSelectP1('O', state))

domNodes.startGame1v1.addEventListener('click', () => handleStartGame('1v1'))
domNodes.startGameCPU.addEventListener('click', () => handleStartGame('CPU'))
