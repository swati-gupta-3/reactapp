import React from 'react'
// import { removeArticle, handleEdit } from '../../listDemo/listDemo.actions'
// import { addArticle } from '../../listDemo/listDemo.actions'

const EditForm = ({ articles, removeArticle, handleEdit }) => {
  debugger
  return (
    articles &&
    articles.length && (
      <ul>
        <li>Total Articles:{articles.length}</li>
        {articles.map(article => {
          return (
            <li key={article.id}>
              {article.title}
              <button
                onClick={() => {
                  removeArticle(article.id)
                }}
              >
                Remove article
              </button>
              &nbsp;
              <button
                onClick={() => {
                  handleEdit(article.id)
                }}
              >
                Edit
              </button>
            </li>
          )
        })}
      </ul>
    )
  )
}

export default EditForm
