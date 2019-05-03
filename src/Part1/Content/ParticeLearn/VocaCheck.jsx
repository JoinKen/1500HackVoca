import React, { Component } from 'react';

class VocaCheck extends Component {

    render() {
        return (
            <div>
                <li>
                    <input type="checkbox" id="checkboxOne" defaultValue="Rainbow Dash" />
                    <label htmlFor="checkboxOne">Rainbow Dash</label>
                </li>
            </div>
        );
    }
}
export default VocaCheck;