export function handleSelectP1(value, state) {
  const imageX = document.getElementById('x-mark-logo')
  const imageO = document.getElementById('o-mark-logo')
  if (value === 'X') {
    state.P1 = 'X'
    document.getElementById('x-mark').classList.add('mark-active')
    document.getElementById('o-mark').classList.remove('mark-active')
  } else {
    state.P1 = 'O'
    document.getElementById('o-mark').classList.add('mark-active')
    document.getElementById('x-mark').classList.remove('mark-active')
  }
}
