import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Action/partOneAct';
import ItemVocaCheck from './itemVocaCheck';

class ListVocaCheck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Vocas: {},
            isActive: false
        }
    }
    componentDidMount() {
        this.props.getListVocaAct();
    }

    componentWillReceiveProps(nextProps) {//
        if (nextProps.Vocas.code === "ok") {
            this.setState({
                Vocas: nextProps.Vocas.data,
                isActive: true
            });
        }
    }
    RenderList = () => {
        let result;
        if (this.state.isActive === true) {
            result = this.state.Vocas.map((item, index) => {
                return <ItemVocaCheck key={index} info={item} />
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
                <ul className="list ks-cboxtags">
                    <div className="list_text">
                        {this.RenderList()}
                    </div>
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        Vocas: state.Vocas
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getListVocaAct: () => {
            dispatch(actions.getListVocaAct())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListVocaCheck);