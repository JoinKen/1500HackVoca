import React, { Component } from 'react'

class contentVoca extends Component {

  render() {
    return (
      <div className="checkpart3">
        <input id={this.props.info.idvocabulary} type="checkbox" />
        <label htmlFor="toggle">{this.props.idvocabulary}
          <span />
          {this.props.info.voca}
        </label>
      </div>
    )
  }
}
export default contentVoca
