import React, { Component } from 'react';

class AudioProcess extends Component {
    render() {
        return (
            <div>
                <div className="wizard-header">
                    <div className="container">
                        <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4">
                            <h4> Chủ đề 1: Thói quen</h4>
                        </div>
                        <div className="card-body col-lg-3 col-md-3 col-xs-3 col-sm-3">
                            <h5 className="h5 font-weight-bold"><a href="true" target="_blank">it1006</a></h5>
                            <p className="mb-0">Chuyện chêm 01</p>

                        </div>
                        <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4">
                            <audio id="music" preload="true">
                                <source src="/ChuyenChem/Chuyenchem01.mp3" />
                            </audio>
                            <div id="audioplayer">
                                <i id="pButton" className="fas fa-play"></i>
                                <div id="timeline">
                                    <div id="playhead"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AudioProcess;