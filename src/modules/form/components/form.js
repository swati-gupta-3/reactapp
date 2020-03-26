import React from 'react'

const Form = ({ addArticle, value, valueChange }) => {
  return (
    <form onSubmit={event => addArticle(event)}>
      <input
        type="text"
        placeholder="Enter article's name"
        value={value}
        onChange={event => valueChange(event)}
      />
      <input type="submit" value="Add article" />
    </form>
  )
}

export default Form
