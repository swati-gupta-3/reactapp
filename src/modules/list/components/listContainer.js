import { connect } from 'react-redux'
import * as selectors from '../../listDemo/listDemo.selectors'
import {
  removeArticle,
  handleEdit,
  saveSelectedItem
} from '../../listDemo/listDemo.actions'
import List from './list'
import React, { Component } from 'react'

const mapStateToProps = state => ({
  articles: selectors.getArticles(state),
  selectedItem: selectors.getSelectedItem(state)
})

const mapDispatchToProps = {
  removeArticle,
  handleEdit,
  saveSelectedItem
}

class ListContainer extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
    }
  }
  handleRemoveArticle = id => {
    const { removeArticle } = this.props
    removeArticle(id)
  }

  handleEdit = id => {
    debugger
    const { handleEdit, saveSelectedItem } = this.props
    console.log(this.props)
    saveSelectedItem(id)
    handleEdit(id)
    console.log(id)
  }

  render() {
    const { articles } = this.props
    debugger
    return (
      <List
        articles={articles}
        removeArticle={this.handleRemoveArticle}
        handleEdit={this.handleEdit}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
