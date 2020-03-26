import React from 'react'
import ListContainer from '../../list/components'
import FormContainer from '../../form/components/formContainer'
import ApiToShow from '../../ApiToShow'
const ListDemo = () => {
  return (
    <div>
      <ApiToShow />
      <FormContainer />
      <h2>Articles</h2>

      <ListContainer />
    </div>
  )
}

export default ListDemo
