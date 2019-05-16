import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';

class itemVocaCheck extends Component {


    handleTypeWord = (idtypeword) => {
        if (idtypeword === 1) {
            return { background: '#B3DDFF' }
        } else if (idtypeword === 2) {
            return { background: '#EEF5B1' }
        } else if (idtypeword === 3) {
            return { background: '#95DEAF' }
        } else if (idtypeword === 4) {
            return { background: '#FAB6AF' }
        } else {
            return { background: '#fff' }
        }
    }
    render() {
        return (
            <div>
                <li className="pull-left">
                    <input type="checkbox" unchecked id={this.props.info.idvocabulary} defaultValue="null" />
                    <label htmlFor={this.props.info.idvocabulary} style={this.handleTypeWord(this.props.info.idtypeword)}>{ReactHtmlParser(this.props.info.voca)} </label>
                </li>
            </div>
        )
    }
}
export default itemVocaCheck