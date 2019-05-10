import React, { Component } from 'react'

class contentVoca extends Component {

  render() {
    return (
      <div>
        <div className="col-md-2">
          <input id={this.props.info.idvocabulary} type="checkbox" />
          <label htmlFor={this.props.info.idvocabulary}>
            <span />
            {this.props.info.voca}
          </label>

        </div>
      </div>
    )
  }
}
export default contentVoca
