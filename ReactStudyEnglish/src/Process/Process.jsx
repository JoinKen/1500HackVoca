import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UnitLearnNumber from './UnitLearnNumber';
class Process extends Component {

    render() {
        return (
            <div>
                <UnitLearnNumber />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                {/* KHÔNG ĐƯỢC XÓA ĐOẠN CODE NÀY
                    ĐÂY LÀ ĐOẠN CODE CHO BIẾT BƯỚC HIỆN TẠI ĐÃ XONG CHƯA
                    HỌC TỚI PART NÀO THÌ CHO ĐOẠN CODE NÀY TƯƠNG ỨNG VỚI PART ĐÓ
                    LƯU Ý cHỈ THAY ĐỔI DÒNG:
                    <div class="timeline-year fa fa-check timeline-year-check"></div>
                    MÀ THÔI CÁC DÒNG KHÁC KHÔNG LIÊN QUAN*/}
                                {/* <div class="timeline">
                        <a href="" class="timeline-content">
                            <div class="timeline-icon">
                                <i class="fa fa-book"></i>
                            </div>
                            <div class="timeline-year fa fa-check timeline-year-check"></div>
                            <div class="inner-content">
                                <h3 class="title">Nghe và thu nạp từ vựng</h3>
                                <p class="description">Đọc hiểu chuyện chêm và đoán nghĩa của từ. Bạn nên đọc 2 đến 3
                                    lần để
                                    tăng hiệu quả ghi nhớ</p>
                            </div>
                        </a>
                    </div> */}
                                <div className="timeline">
                                    <Link to="/" className="timeline-content">
                                        <div className="timeline-icon">
                                            <i className="fa fa-book" />
                                        </div>
                                        <div className="timeline-year">PART 1</div>
                                        <div className="inner-content">
                                            <h3 className="title">Nghe và thu nạp từ vựng</h3>
                                            <p className="description">Đọc hiểu chuyện chêm và đoán nghĩa của từ. Bạn nên đọc 2 đến
                                                3 lần để
                                    tăng hiệu quả ghi nhớ</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="timeline">
                                    <Link to="/" className="timeline-content">
                                        <div className="timeline-icon">
                                            <i className="fa fa-briefcase" />
                                        </div>
                                        <div className="timeline-year"> PART 1 </div>
                                        <div className="inner-content">
                                            <h3 className="title">Điền vào ô trống những từ vựng</h3>
                                            <p className="description">Dựa theo trí nhớ của bạn để điền vào các ô trống từ vựng mà
                                                bạn cho là
                                    đúng với ngữ cảnh và ý nghĩa</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="timeline">
                                    <Link to="/" className="timeline-content">
                                        <div className="timeline-icon">
                                            <i className="fa fa-search" />
                                        </div>
                                        <div className="timeline-year"> PART 2 </div>
                                        <div className="inner-content">
                                            <h3 className="title">Học từ vựng với phần âm thanh tương tự</h3>
                                            <p className="description">Hình ảnh và ví dụ ở đây sẽ giúp bạn tăng thêm liên kết cho từ
                                                vựng
                                    trong não</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="timeline">
                                    <Link to="/" className="timeline-content">
                                        <div className="timeline-icon">
                                            <i className="fa fa-pencil" />
                                        </div>
                                        <div className="timeline-year"> PART 3 </div>
                                        <div className="inner-content">
                                            <h3 className="title">Tự chế</h3>
                                            <p className="description">Tự chế chuyện chêm dựa vào các từ vựng trong bài. Phần này có
                                                lẽ là tốn
                                    công sức nhất nhưng lại cực kì quan trọng </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Process;