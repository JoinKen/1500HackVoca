import React, { Component } from 'react'
import ItemContentEdit from './itemContentEdit';

class ContentEdit extends Component {
  render() {
    return (
      <div>
        <div className="content_text form-group text-left">
          <ItemContentEdit />
        </div>
      </div>
    )
  }
}
export default ContentEdit