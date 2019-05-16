import React, { Component } from 'react';
import MyVocabolary from './MyVocabolary';
import { connect } from 'react-redux';
import * as actions from '../Action/ActionVoca';

class ListVocabolary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Vocas: {},

        }
    }
    componentDidMount() {
        this.props.getListVocaAct();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.Vocas.code === "ok") {
            this.setState({
                Vocas: nextProps.Vocas.data,
                isActive: true
            });
        }
    }
    RenderList = () => {
        console.log(this.state.Vocas);
        let result;
        if (this.state.isActive === true) {
            result = this.state.Vocas.map((item, index) => {
                if (index < 3) {
                    return <MyVocabolary key={index} info={item} />
                }
            })

        }
        else {
            result = <div>Không có dữ liệu</div>;
        }
        return result;
    }
    RenderList2 = () => {
        console.log(this.state.Vocas);
        let result;
        if (this.state.isActive === true) {
            result = this.state.Vocas.map((item, index) => {
                if (index > 4 && index <= 7) {
                    return <MyVocabolary key={index} info={item} />
                }
            })

        }
        else {
            result = <div>Không có dữ liệu</div>;
        }
        return result;
    }

    RenderList3 = () => {
        console.log(this.state.Vocas);
        let result;
        if (this.state.isActive === true) {
            result = this.state.Vocas.map((item, index) => {
                if (index > 7 && index <= 10) {
                    return <MyVocabolary key={index} info={item} />
                }
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
                <div className="container">
                    <div className="row task_two col-md-12 col-sm-12 col-xs-12 lg col-lg-12">
                        {this.RenderList()}
                    </div>
                    <div className="row task_two col-md-12 col-sm-12 col-xs-12 lg col-lg-12">
                        {this.RenderList2()}
                    </div>
                    <div className="row task_two col-md-12 col-sm-12 col-xs-12 lg col-lg-12">
                        {this.RenderList3()}
                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ListVocabolary);