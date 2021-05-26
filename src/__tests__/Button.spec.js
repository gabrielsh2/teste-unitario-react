import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Button } from '../Button'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

describe('Componente do botão', () => {
  test('Muda o texto do botão no evento de clique', () => {
    act(() => {
      ReactDOM.render(<Button text='TEXTINHO DO BOTÃO' />, container)
    })
    const button = container.querySelector('button')
    expect(button.textContent).toBe('TEXTINHO DO BOTÃO')
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(button.textContent).toBe('MUDOU O TEXTO')
  })
})
