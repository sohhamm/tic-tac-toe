import {domNodes, state} from './index.js'

export function handleSelectP1(value, state) {
  if (value === 'X') {
    state.P1 = 'X'
    domNodes.containerX.classList.add('mark-active')
    domNodes.containerO.classList.remove('mark-active')
  } else {
    state.P1 = 'O'
    domNodes.containerO.classList.add('mark-active')
    domNodes.containerX.classList.remove('mark-active')
  }
}

export function handleStartGame(type) {
  domNodes.menuContainer.style.display = 'none'
  domNodes.gameContainer.style.display = 'block'
  if (type === '1v1') {
    state.mode = '1V1'
  }
  if (type === 'CPU') {
    state.mode = 'CPU'
  }
}

export function handleCurrentTurn() {
  // if (state.P1 === 'X') {
  // }
}
