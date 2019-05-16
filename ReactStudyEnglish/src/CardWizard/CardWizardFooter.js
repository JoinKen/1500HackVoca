import React, { Component } from 'react';

class AudioProcess extends Component {
    render() {
        return (
            <div>
                <div className="pull-right btn_next">
                    <input type="button" className="btn btn-next btn-fill btn-success btn-wd" name="next"
                        defaultValue="Next" />
                    <input type="button btn_finish" className="btn btn-finish btn-fill btn-success btn-wd" name="finish"
                        defaultValue="Finish" style={{ display: 'none' }} />
                </div>
                <div className="pull-left btn_previous">
                    <input type="button" className="btn btn-previous btn-fill btn-default btn-wd disabled"
                        name="previous" defaultValue="Previous" />
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}

export default AudioProcess;