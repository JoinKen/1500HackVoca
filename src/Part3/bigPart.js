import React, { Component } from 'react'
import ContentVoca from '../Part3/contentVoca';
import { connect } from 'react-redux';
import * as actions from '../Action/ActionVoca';
import CkeEditor from './ckeEditor';

class bigPart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Vocas: {},
            isActive: false,
            text: ""
        }
    }
    componentDidMount() {
        this.props.getListVocaAct();

    }
    componentWillReceiveProps(nextProps) {
        console.log(this.state.isActive);
        if (nextProps.Vocas.code === "ok") {
            this.setState({
                Vocas: nextProps.Vocas.data,
                isActive: true
            });
        }
    }
    renderListVoca() {

        let result;
        if (this.state.isActive === true) {
            result = this.state.Vocas.map((item, index) => {
                return <ContentVoca key={index} info={item} />
            })

        }
        else {
            result = <div>Không có dữ liệu</div>;
        }
        return result;
    }
    handleOnchange = () => {

    }
    render() {
        return (
            <div>
                <div className="tab-pane active" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6" style={{ width: "90%" }}>
                                <h1>
                                    <span>
                                        <i className="fas fa-book-open" />
                                    </span>
                                    Checkboxes that work goodly
                                </h1>
                                <div
                                    id="collapseOne"
                                    className="panel-collapse collapse in"
                                    role="tabpanel"
                                    aria-labelledby="headingOne">

                                    <div className="check_text">
                                        <section>
                                            <div className="row">
                                                {this.renderListVoca()}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <CkeEditor />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
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
export default connect(mapStateToProps, mapDispatchToProps)(bigPart)