import React, { Component } from 'react';

class CardWizardNav extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li className="active" style={{ width: '33.3333%' }}>
                        <a href="#about" data-toggle="tab" aria-expanded="true">Nghe và thu nạp từ
                                            vựng</a>
                    </li>
                    <li style={{ width: '33.3333%' }}>
                        <a href="#account" data-toggle="tab">Hình ảnh và âm thanh tương tự</a>
                    </li>
                    <li style={{ width: '33.3333%' }}>
                        <a href="#address" data-toggle="tab">Bài tập ứng dụng</a>
                    </li>
                </ul>
                <div className="moving-tab"
                    style={{ width: '380px', transform: 'translate3d(-8px, 0px, 0px)', transition: 'transform 0s ease 0s' }}>
                    Nghe và thu nạp từ vựng</div>
            </div>
        );
    }
}

export default CardWizardNav;