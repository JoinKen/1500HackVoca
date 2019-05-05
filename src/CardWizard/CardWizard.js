import React, { Component } from 'react';
import AudioProcess from './AudioProcess';
import ContentPart1 from './ContentPart1';
import ContentPart2 from './ContentPart2';
import ContentPart3 from './ContentPart3';
import CardWizardFooter from './CardWizardFooter';
import CardWizardNav from './CardWizardNav';

class CardWizard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            {/*Wizard container*/}
                            <div className="wizard-container">
                                <div className="card wizard-card" data-color="green" id="wizardProfile">
                                    <form action="true" method="true" noValidate="novalidate">

                                        <AudioProcess />

                                        <div className="wizard-navigation">
                                            <CardWizardNav />
                                        </div>


                                        <div className="tab-content">
                                            <div className="tab-pane active" id="about">
                                                <ContentPart1 />
                                            </div>
                                            <div className="tab-pane" id="account">
                                                <ContentPart2 />
                                            </div>
                                            <div className="tab-pane" id="address">
                                                <ContentPart3 />
                                            </div>

                                        </div>
                                        <div className="wizard-footer">
                                            <CardWizardFooter />
                                        </div>

                                    </form>
                                </div>
                            </div>
                            {/* wizard container */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardWizard;