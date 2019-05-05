import React, { Component } from 'react';
import VocaCheck from "./VocaCheck";
class ListVocaCheck extends Component {

    render() {
        return (
            <div>
                <ul className="list ks-cboxtags">
                    <div className="list_text">

                        <VocaCheck />

                    </div>
                </ul>
            </div>
        );
    }
}
export default ListVocaCheck;