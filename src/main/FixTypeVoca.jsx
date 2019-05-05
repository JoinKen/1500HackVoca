import React, { Component } from 'react';

class FixTypeVoca extends Component {

    render() {
        return (
            <div>
                <div>
                    {/* Made With Material Kit */}
                    <a href="http://demos.creative-tim.com/material-kit/index.html?ref=material-bootstrap-wizard"
                        className="made-with-mk1">
                        <div className="brand">adj</div>
                        <div className="made-with">Từ vựng
                            <strong>Tính từ</strong>
                        </div>
                    </a>
                    <a href="http://demos.creative-tim.com/material-kit/index.html?ref=material-bootstrap-wizard"
                        className="made-with-mk2">
                        <div className="brand">adv</div>
                        <div className="made-with">Từ vựng
                            <strong>Trạng từ</strong>
                        </div>
                    </a>
                    <a href="http://demos.creative-tim.com/material-kit/index.html?ref=material-bootstrap-wizard"
                        className="made-with-mk3">
                        <div className="brand">(v)</div>
                        <div className="made-with">Từ vựng
                            <strong>Động từ</strong>
                        </div>
                    </a>
                    <a href="http://demos.creative-tim.com/material-kit/index.html?ref=material-bootstrap-wizard"
                        className="made-with-mk4">
                        <div className="brand">(n)</div>
                        <div className="made-with">Thuộc loại
                            <strong>Danh từ</strong>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default FixTypeVoca;