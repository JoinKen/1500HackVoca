import React, { Component } from 'react';
import Item_learn from '../Content/Learn-item/item_learn.js'
class UnitLearn extends Component {
    
    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className>
                                Unit 1: COMMUNICATION
            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" style={{}}>
                        {/* Learn-item */}
                        <Item_learn />
                    </div>
                </div>
            </div>
        );
    }
}

export default UnitLearn;