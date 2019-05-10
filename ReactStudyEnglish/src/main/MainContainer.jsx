import React, { Component } from 'react';
import CartWizard from '../CardWizard/CardWizard';
import FixTypeVoca from './FixTypeVoca';

class MainContainer extends Component {

    render() {
        return (
            <div>
                <FixTypeVoca />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <CartWizard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;