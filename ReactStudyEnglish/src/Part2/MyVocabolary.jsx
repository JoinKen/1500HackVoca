import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Action/ActionVoca';
import ReactHtmlParser from 'react-html-parser';
class Vocabolary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Vocas: {},
            color: ["red", "blue", "green", "yellow"],
            image: "",
            voca: "",
            spelling: "",
            idtypeword: "",
            meaning: "",
            example1: "",
            example2: "",
            idunit: "",
            idpart1: "",
            contentsoundsame: "",
            idusers: "",
            isrendervoca: false



        }
        this.setStyle = this.setStyle.bind(this);
    }
    handleOnchange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            image: nextProps.image,
            voca: nextProps.voca,
            spelling: nextProps.spelling,
            idtypeword: nextProps.idtypeword,
            meaning: nextProps.meaning,
            example1: nextProps.example1,
            example2: nextProps.example2,
            idunit: nextProps.idunit,
            idpart1: nextProps.idpart1,
            contentsoundsame: nextProps.contentsoundsame,
            idusers: nextProps.idusers,

        })
    }

    handleOnDelete(idvoca, event) {
        this.props.deleteVoca(idvoca);
    }
    setStyle(color) {
        if (this.props.info.idtypeword === 2) {
            return {
                color: "red"
            }
        }
        else {
            if (this.props.info.idtypeword === 3) {
                return {
                    color: "#9c27b0"
                }
            }
            else if (this.props.info.idtypeword === 1) {
                return {
                    color: "green"
                }
            }
            else if (this.props.info.idtypeword === 4) {
                return {
                    color: "yellow"
                }
            }
        }


    }

    handleTypeWord = (idtypeword) => {
        if (idtypeword === 1) {
            return "text-example1"
        } else if (idtypeword === 2) {
            return "text-example2"
        } else if (idtypeword === 3) {
            return "text-example3"
        } else if (idtypeword === 4) {
            return "text-example4"
        } else {
            return "text-example"
        }

    }
    speak = () => {
        console.log("speaking");
        console.log(this.props.info.voca);
        this.props.Audio(this.props.info.voca);
    }
    handleTypeWordVoca = (idtypeword) => {
        if (idtypeword === 1) {
            return "title col-lg-12 text-voca1"
        } else if (idtypeword === 2) {
            return "title col-lg-12 text-voca2"
        } else if (idtypeword === 3) {
            return "title col-lg-12 text-voca3"
        } else if (idtypeword === 4) {
            return "title col-lg-12 text-voca4"
        } else {
            return "title col-lg-12 text-voca"
        }
    }

    render() {

        return (
            <div>
                <div className="social-share-wrap text-left">
                    <div className="cover">
                        <img className="image" src={this.props.info.image} />
                    </div>
                    <div className="content col-lg-12">
                        <div className="col-lg-9"></div>
                        <button type="button" onClick={this.speak} className="phatamvoca fa fa-volume-up"></button>
                        <label className="label" htmlFor="toggle">{this.props.idvocabulary}</label>
                        <div className={this.handleTypeWordVoca(this.props.info.idtypeword)}>
                            <b className="col-lg-6 ">{this.props.info.voca}</b>
                            <b className="col-lg-6">{'{'}{this.props.info.spelling}{'}'}</b>
                        </div>
                        <div className="text">

                            {ReactHtmlParser(this.props.info.contentsoundsame)}

                        </div>

                        <div className="text-example">{ReactHtmlParser(this.props.info.additional)}
                        </div>

                        <div className={this.handleTypeWord(this.props.info.idtypeword)}>
                            <div className="item-example">&gt; {this.props.info.example1}</div>
                            <div className="item-example">&gt; {this.props.info.example2}</div>
                        </div>
                        <div className="price" />

                    </div>
                    <div className="col-md-12 button addandremove">
                        {/* <button type="button" onClick={this.delete} className="removevoca col-md-5 bottom"><i
                            className="fa fa-minus-circle " /> Remove</button>
                        <button type="button" onClick={(e) => this.handleOnSubmit(this.props.info, e)}
                            data-toggle="modal" data-target="#myModal"
                            className="fa fa-plus-circle addvoca col-md-6 bottom pull-right">Add My Voca</button> */}
                        <button type="button" onClick={(e) => this.handleOnDelete(this.props.info, e)} className="removevoca col-md-5 bottom"><i
                            className="fa fa-minus-circle " data-toggle="modal" data-target="#myModal" /> Remove</button>
                        {/* <button type="button" onClick={(e) => this.handleOnSubmit(this.props.info, e)}
                            data-toggle="modal" data-target="#myModal"
                            className="fa fa-plus-circle addvoca col-md-6 bottom pull-right">Add My Voca</button> */}
                        {/* <button type="button" data-toggle="modal" data-target="#myModal"
                onClick={this.handleOnSubmit(this.props.info)}
                className="fa fa-plus-circle addvoca col-md-6 bottom pull-right">Add My Voca</button> */}
                    </div>
                    <div className="addPost">
                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <h4 className="modal-title"> Đã Xóa khỏi Your VOCABOLARY </h4>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">
                                            Close
                                        </button>
                                    </div>
                                </div>
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
        Vocas: state.Vocas
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteVoca: (id) => {
            dispatch(actions.deleteVoca(id));
        },
        inserVocaAct: (image, voca, spelling, idtypeword,
            meaning, example1, example2, idunit, idpart1, contentsoundsame, idusers) => {
            dispatch(actions.inserVocaAct(image, voca, spelling, idtypeword,
                meaning, example1, example2, idunit, idpart1, contentsoundsame, idusers));

        },
        Audio: (voca) => {
            dispatch(actions.audioAct(voca));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Vocabolary);