import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';

class itemVocaCheck extends Component {


    render() {
        return (
            <div >
                <li className="pull-left">
                    <input type="checkbox" id={this.props.info.idvocabulary} defaultValue="null" />
                    <label htmlFor={this.props.info.idvocabulary}>{ReactHtmlParser(this.props.info.voca)}</label>
                </li>
            </div>
        )
    }
}
export default itemVocaCheck