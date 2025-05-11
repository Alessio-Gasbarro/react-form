import { useState } from 'react'

const articlesArray = [
  'Base Text 1',
  'Base Text 2',
  'Base Text 3',
  'Base Text 4',
  'Base Text 5',
  'Base Text 6',
  'Base Text 7',
  'Base Text 8',
  'Base Text 9',
  'Base Text 10'
]
function App() {

  const [articles, setArticles] = useState(articlesArray)
  const [newArticle, setNewArticle] = useState('')

  const createArticle = (e) => {
    e.preventDefault()
    setArticles([...articles, newArticle])
    setNewArticle('')
  }

  const deleteArticle = (index) => {
    const updatedArticles = [...articles]
    updatedArticles.splice(index, 1)
    setArticles(updatedArticles)
  }

  return (
    <>

    </>
  )
}

export default App