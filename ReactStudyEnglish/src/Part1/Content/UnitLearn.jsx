import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Action/partOneAct';
import ItemLearnLeft from './UnitLearn/itemLearnLeft';
import ItemLearnRight from './UnitLearn/itemLearnRight';

class UnitLearn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ContentStorys: {},
            isActive: false
        }
    }
    componentDidMount() {
        this.props.getListContentStoryAct();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.ContentStorys.code === "ok") {
            this.setState({
                ContentStorys: nextProps.ContentStorys.data,
                isActive: true
            });
        }
    }
    RenderListLeft = () => {
        let result;
        if (this.state.isActive === true) {
            result = this.state.ContentStorys.map((item, index) => {
                return <ItemLearnLeft key={index} info={item} />
            })

        }
        else {
            result = <div>Không có dữ liệu</div>;
        }
        return result;
    }
    RenderListRight = () => {
        let result;
        if (this.state.isActive === true) {
            result = this.state.ContentStorys.map((item, index) => {
                return <ItemLearnRight key={index} info={item} />
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
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Unit 1: COMMUNICATION
                             </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" style={{}}>
                        {/* Learn-item */}
                        <div className="content_one panel-body">
                            <div className="col-lg-6 col-md-6 col-xs-6 col-sm-6 text-left">
                                {this.RenderListLeft()}
                                {/* <ItemLearnLeft /> */}
                            </div>
                            <div className="col-lg-6 col-md-6 col-xs-6 col-sm-6 text-left">
                                {this.RenderListRight()}
                                {/* <ItemLearnRight /> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ContentStorys: state.ContentStorys
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getListContentStoryAct: () => {
            dispatch(actions.getListContentStoryAct())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UnitLearn);