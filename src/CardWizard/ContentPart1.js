import React, { Component } from 'react';
import UnitLearn from '../Part1/Content/UnitLearn';
import PracticeLearn from '../Part1/Content/PracticeLearn';
class AudioProcess extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{ width: '95%' }}>
                            <div className="panel-group active" id="accordion" role="tablist"
                                aria-multiselectable="true">

                                <UnitLearn />

                                <PracticeLearn />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AudioProcess;