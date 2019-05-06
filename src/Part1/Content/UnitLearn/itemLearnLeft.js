import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class itemLearn extends Component {
    render() {
        return (
            <div>
                <div className="iteam iteam_one">
                    <div className="content_text">
                        <div className="col-md-2 actor-part1">
                            <p>{this.props.info.name}</p>
                        </div>
                        <div className="col-md-10">
                            {ReactHtmlParser(this.props.info.content)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default itemLearn;