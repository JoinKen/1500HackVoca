import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../../Action/partOneAct';
import ItemContentEdit from './itemContentEdit';

class ContentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ContentStoryTextboxs: {},
      Vocas: [],
      isActive: false,
      isFinish: false
    }
  }
  componentDidMount() {
    this.props.getListContentStoryTextboxAct();
    this.props.getListVocaAct();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ContentStoryTextboxs.code === "ok") {
      this.setState({
        ContentStoryTextboxs: nextProps.ContentStoryTextboxs.data,
        Vocas: nextProps.Vocas.data,
        isActive: true
      });
    }
  }
  RenderList = () => {
    let result;
    if (this.state.isActive === true) {
      result = this.state.ContentStoryTextboxs.map((item, index) => {
        return <ItemContentEdit key={index} info={item} keys={index}
          length={this.state.ContentStoryTextboxs.length}
          vocas={this.state.Vocas} />
      })
    }
    else {
      result = <div>Không có dữ liệu</div>;
    }
    return result;
  }

  render() {
    return (
      <div>
        <div className="content_text form-group text-left">
          {this.RenderList()}
          {/* <ItemContentEdit /> */}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    ContentStoryTextboxs: state.ContentStoryTextboxs,
    Vocas: state.Vocas
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getListContentStoryTextboxAct: () => {
      dispatch(actions.getListContentStoryTextboxAct())
    },
    getListVocaAct: () => {
      dispatch(actions.getListVocaAct())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentEdit);