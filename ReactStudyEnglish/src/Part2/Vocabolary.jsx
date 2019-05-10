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
            idusers: ""



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
    handleOnSubmit = (event) => {
        //console.log("ssdfasdf");
        event.preventDefault();
        this.props.inserVocaAct(this.state.image, this.state.voca, this.state.spelling, this.state.idtypeword,
            this.state.meaning, this.state.example1, this.state.example2, this.state.idunit, this.state.idpart1,
            this.state.contentsoundsame, this.state.idusers
        )
    }
    delete = () => {
        console.log("sdsd");
        this.props.deleteVoca(this.props.info.idvocabulary);
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
            return "text-example1"
        } else if (idtypeword === 3) {
            return "text-example3"
        } else if (idtypeword === 4) {
            return "text-example4"
        } else {
            return "text-example"
        }

    }
    speak =() => {
        console.log("speaking");
        console.log(this.props.info.voca);
        this.props.Audio(this.props.info.voca);
    }
    render() {


        // var content = this.state.color.map((color,index) =>{
        // return <span // key={index} // style={this.setStyle()} //
        // className = "voca-part1-blue" > { this.props.info.meaning }</span >
        // })
        return (
            <div>
                <div className="social-share-wrap text-left">
                    <div className="cover">
                        <img className="image" src={this.props.info.image} />
                    </div>
                    <div className="content">
                        <label className="label" htmlFor="toggle">{this.props.idvocabulary}</label>
                        <div className="title col-lg-12">
                            <b className="col-lg-6">{this.props.info.voca}</b>
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
                    <div className="col-md-12 buttonaddandremove">
                        <button type="button" onClick={this.delete} className="removevoca col-md-5 bottom"><i
                            className="fa fa-minus-circle " /> Remove</button>
                        <button type="button" data-toggle="modal" data-target="#myModal"
                            className="fa fa-plus-circle addvoca col-md-6 bottom"> Add My Voca</button>
                            <button type="button" onClick={this.speak} >Phát âm</button>
                    </div>
                    <div className="addPost">
                        <div className="modal" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">  Add Vocabolary </h4>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <div className="form_add form-group">
                                                <label htmlFor="image">image:</label>
                                                <input value={this.state.image} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="imagea" placeholder="Enter image" name="image" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="voca">voca:</label>
                                                <input value={this.state.voca} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="voca" placeholder="Enter voca" name="voca" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="spelling">spelling:</label>
                                                <input value={this.state.spelling} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="spelling" placeholder="Enter spelling"
                                                    name="spelling" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="idtypeword">idtypeword:</label>
                                                <input value={this.state.idtypeword} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="idtypeword" placeholder="Enter idtypeword"
                                                    name="idtypeword" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="meaning">meaning:</label>
                                                <input value={this.state.meaning} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="meaning" placeholder="Enter meaning"
                                                    name="meaning" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="example1">example1:</label>
                                                <input value={this.state.example1} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="example1" placeholder="Enter example1"
                                                    name="example1" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="example2">example2:</label>
                                                <input value={this.state.example2} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="example2" placeholder="Enter example2"
                                                    name="example2" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="idunit">idunit:</label>
                                                <input value={this.state.idunit} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="idunit" placeholder="Enter idunit" name="idunit" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="idpart1">idpart1:</label>
                                                <input value={this.state.idpart1} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="idpart1" placeholder="Enter idpart1"
                                                    name="idpart1" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="contentsoundsame">contentsoundsame:</label>
                                                <input value={this.state.contentsoundsame} onChange={this.handleOnchange}
                                                    type="text" className="form-control" id="contentsoundsame"
                                                    placeholder="Enter contentsoundsame" name="contentsoundsame" />
                                            </div>
                                            <div className="form_add form-group">
                                                <label htmlFor="idusers">idusers:</label>
                                                <input value={this.state.idusers} onChange={this.handleOnchange} type="text"
                                                    className="form-control" id="idusers" placeholder="Enter idusers"
                                                    name="idusers" />
                                            </div>

                                            <div className="form_add form-group">
                                                <button type="button" className="btn btn-outline-danger"
                                                    onClick={this.handleOnSubmit}>
                                                    Thêm
                                    </button>


                                            </div>
                                        </div>
                                    </div>
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
                <div className="social-share-overlay">
                    <label className="close" htmlFor="toggle">×</label>
                    <div className="social-share-links">
                        <a target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?display=popup&u=http%3A%2F%2Fcodecanyon.net%2Fitem%2Fmk-flat-pricing-table%2F13404608%3Fref%3Dkhadkamhn"><i
                                className="fa fa-facebook" /> Facebook</a>
                        <a target="_blank"
                            href="https://twitter.com/intent/tweet?text=Check+out+%27MK+Flat+Pricing+Table%27+on+%23EnvatoMarket+by+%40khadkamhn+%23codecanyon&url=http%3A%2F%2Fcodecanyon.net%2Fitem%2Fmk-flat-pricing-table%2F13404608%3Fref%3Dkhadkamhn"><i
                                className="fa fa-twitter" /> Twitter</a>
                        <a target="_blank"
                            href="https://pinterest.com/pin/create/button?description=MK+Flat+Pricing+Table&media=http%3A%2F%2F0.s3.envato.com%2Ffiles%2F156087519%2Fmk_flat_price_table.png&url=http%3A%2F%2Fcodecanyon.net%2Fitem%2Fmk-flat-pricing-table%2F13404608%3Fref%3Dkhadkamhn"><i
                                className="fa fa-pinterest" /> Pinterest</a>
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
        Audio:(voca) =>{
            dispatch(actions.audioAct(voca));
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Vocabolary);