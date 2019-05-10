import React, { Component } from 'react';
import TitleUnit from "./PracticeLearn/TitleUnit";
import ListVocaCheck from "./PracticeLearn/ListVocaCheck";
import ContentEdit from './PracticeLearn/ContentEdit';

class PracticeLearn extends Component {

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                        <TitleUnit />
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="true" style={{}}>
                        <div className="panel-body col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <h4 className="text-center">Bài test</h4>


                            <div className="container check_box col-md-2 col-xs-2 col-sm-2 col-lg-2 ">
                                <ListVocaCheck />
                            </div>


                            <div className="practice_content col-md-10 col-xs-10 col-sm-10 col-lg-10">
                                <ContentEdit />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PracticeLearn;