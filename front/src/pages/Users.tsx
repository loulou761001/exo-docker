import {useEffect, useState} from 'react'

export const Users = () => {
  const [users, setUsers] = useState<{ username: string, email: string, id: number }[]>([])
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const result = await fetch(import.meta.env.VITE_API_USER_URL + '/')
        console.log(result)
        const json = await result.json()
        setUsers(json || [])
      } catch (e) {
        console.error(e)
      }

    }
    fetchRecipes()
  }, [])

  return (
    <>
      <h1>Users</h1>
      <div className="flex flex-col gap-2 my-2">
        {users.map((user) => {
          return <div className="border-2 rounded p-1">
            <h2>{user.username}</h2>
            <p>{user.email}</p>
          </div>
        })}
      </div>
    </>
  )
}
