import React, { Component } from 'react';
import ItemContentVi from './itemContentVi';

class itemLearn extends Component {
    render() {
        return (
            <div>

                <div className="iteam iteam_one">
                    <div className="content_text">
                        <ItemContentVi />
                        <ItemContentVi />
                    </div>
                </div>
            </div>
        );
    }
}

export default itemLearn;