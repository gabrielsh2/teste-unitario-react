import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { Users } from '../Users'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe('Componente Users', () => {
  test('Lista de usuarios', async () => {
    const fakeResponse = [{ name: 'Leanne Graham' }, { name: 'Ervin Howell' }]

    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        json: () => fakeResponse
      }
      
      return fetchResponse
    })

    await act(async () => {
      render(<Users />, container)
    })

    const nameList = container.querySelectorAll('li')

    expect(nameList[0].innerHTML).toBe('Leanne Graham')
    expect(nameList[1].innerHTML).toBe('Ervin Howell')

    window.fetch.mockRestore()
  })
})
