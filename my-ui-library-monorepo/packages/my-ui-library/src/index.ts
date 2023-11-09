import { h } from 'snabbdom'
import snabbdomInit from 'snabbdom/init'
 // Import 'init' function from 'snabbdom'

// State
let state = { count: 0 }
let updateCallback

// Template function
function template() {
  return h('div', [
    h('h1', state.count.toString()),
    h('button', { on: { click: handleClick } }, 'Add')
  ])
}

// Handle Click
function handleClick() {
  updateState({ count: state.count + 1 })
}

// Update State
function updateState(newState) {
  state = { ...state, ...newState }
  if (updateCallback) updateCallback()
}

// Mount the UI
function mount(container) {
  const patch = snabbdomInit([/* Your Snabbdom modules here */]) // Corrected import
  const vnode = template()
  patch(container, vnode)
}

// Lifecycle Effect
function useEffect(effect) {
  updateCallback = effect
}

export { mount, useEffect }
