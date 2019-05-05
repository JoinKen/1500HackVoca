import React, { Component } from 'react';
import ItemContentEn from './itemContentEn';

class itemLearn extends Component {
    render() {
        return (
            <div>
                <div className="iteam_one">
                    <div className="content_text">
                        <ItemContentEn />
                        <ItemContentEn />
                    </div>
                </div>
            </div>
        );
    }
}

export default itemLearn;