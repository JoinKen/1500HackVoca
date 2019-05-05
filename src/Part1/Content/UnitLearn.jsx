import React, { Component } from 'react';
import ItemLearnLeft from './UnitLearn/itemLearnLeft';
import ItemLearnRight from './UnitLearn/itemLearnRight';
class UnitLearn extends Component {

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Unit 1: COMMUNICATION
                             </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" style={{}}>
                        {/* Learn-item */}
                        <div className="content_one panel-body">
                            <div className="col-lg-6 col-md-6 col-xs-6 col-sm-6 text-left">
                                <ItemLearnLeft />
                            </div>
                            <div className="col-lg-6 col-md-6 col-xs-6 col-sm-6 text-left">
                                <ItemLearnRight />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnitLearn;