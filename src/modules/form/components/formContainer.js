import { connect } from 'react-redux'
import React, { Component } from 'react'
import { addArticle } from '../../listDemo/listDemo.actions'
import * as selectors from '../../listDemo/listDemo.selectors'
import Form from './form'

const mapDispatchToProps = {
  addArticle
}
const mapStateToProps = state => ({
  articles: selectors.getArticles(state),
  selectedItem: selectors.getSelectedItem(state)
})

class FormContainer extends Component {
  state = {
    value: ''
  }

  counter = 0

  componentDidUpdate(prevProps) {
    debugger
    const { articles, selectedItem } = this.props

    // console.log(prevProps.selectedItem)
    // console.log(this.props.selectedItem)

    if (prevProps.selectedItem !== this.props.selectedItem) {
      debugger
      // console.log(prevProps.selectedItem !== this.props.selectedItem)
      const selectedItem1 = articles.find(each => each.id === selectedItem)
      this.setState({ value: selectedItem1.title, id: selectedItem1.id })
      // console.log(selectedItem1.id)
    }
  }

  handleAddArticle = event => {
    debugger
    const { addArticle } = this.props
    console.log(this.props)

    event.preventDefault()

    addArticle({
      title: this.state.value,

      id: this.counter++
    })

    this.setState({
      value: ''
    })
  }

  handleValueChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <Form
        addArticle={this.handleAddArticle}
        value={this.state.value}
        valueChange={this.handleValueChange}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
