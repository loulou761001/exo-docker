import {useEffect, useState} from 'react'

export const Recipes = () => {
  const [recipes, setRecipes] = useState<{ name: string, instructions: string, id: number }[]>([])
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        console.log(import.meta.env.VITE_API_URL + '/recipes')
        const result = await fetch(import.meta.env.VITE_API_RECIPE_URL + '/recipes')
        const json = await result.json()
        setRecipes(json || [])
      } catch (e) {
        console.error(e)
      }

    }
    fetchRecipes()
  }, [])

  return (
    <>
      <h1>Recipes</h1>
      <div className="flex flex-col gap-2 my-2">
        {recipes.map((recipe) => {
          return <div className="border-2 rounded p-1">
            <h2>{recipe.name}</h2>
            <p>{recipe.instructions}</p>
          </div>
        })}
      </div>
    </>
  )
}
