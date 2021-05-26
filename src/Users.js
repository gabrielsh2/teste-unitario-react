import React, { useState, useEffect } from 'react'

export function Users() {
  const [users, setUsers] = useState({ data: [] })

  useEffect(() => {
    async function fetchData() {
      const data = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
      ).json()
      setUsers({ data })
    }

    fetchData()
  }, [])

  return (
    <ul className='list'>
      {users.data.map(user => (
        <li className='item' key={user.name}>
          {user.name}
        </li>
      ))}
    </ul>
  )
}
