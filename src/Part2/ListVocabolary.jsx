import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Vocabolary from './Vocabolary';
class ListVocabolary extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row task_two col-md-12 col-sm-12 col-xs-12 lg col-lg-12">
                        <Vocabolary />
                        <Vocabolary />
                        <Vocabolary />
                    </div>
                    <div className="row task_two col-md-12 col-sm-12 col-xs-12 lg col-lg-12">
                        <Vocabolary />
                        <Vocabolary />
                        <Vocabolary />
                    </div>
                </div>

            </div>
        );
    }
}

ListVocabolary.propTypes = {

};

export default ListVocabolary;