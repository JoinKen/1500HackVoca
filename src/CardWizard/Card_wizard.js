import React, { Component } from 'react';

class Card_wizard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            {/*Wizard container*/}
                            <div className="wizard-container">
                                <div className="card wizard-card" data-color="green" id="wizardProfile">
                                    <form action method noValidate="novalidate">
                                        {/*        You can switch " data-color="purple" "  with one of the next bright colors: "green", "orange", "red", "blue"       */}
                                        {/* audio-process */}
                                        <div className="wizard-header">
                                            <div className="col-lg-5 col-md-5 col-xs-5 col-sm-5">
                                                <h4> Chủ đề 1: Thói quen</h4>
                                            </div>
                                            <div className="container">
                                                <div className="holder">
                                                    <div className="audio green-audio-player">
                                                        <div className="loading">
                                                            <div className="spinner" />
                                                        </div>
                                                        <div className="play-pause-btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={24} viewBox="0 0 18 24">
                                                                <path fill="#566574" fillRule="evenodd" d="M18 12L0 24V0" className="play-pause-icon" id="playPause" />
                                                            </svg>
                                                        </div>
                                                        <div className="controls">
                                                            <span className="current-time">0:00</span>
                                                            <div className="slider" data-direction="horizontal">
                                                                <div className="progress">
                                                                    <div className="pin" id="progress-pin" data-method="rewind" />
                                                                </div>
                                                            </div>
                                                            <span className="total-time">0:00</span>
                                                        </div>
                                                        <div className="volume">
                                                            <div className="volume-btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                                    <path fill="#566574" fillRule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z" id="speaker" />
                                                                </svg>
                                                            </div>
                                                            <div className="volume-controls hidden" style={{ bottom: '-164px', left: '-3px' }}>
                                                                <div className="slider" data-direction="vertical">
                                                                    <div className="progress">
                                                                        <div className="pin" id="volume-pin" data-method="changeVolume" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <audio crossOrigin>
                                                            <source src="./index/chuyenchem/Chuyenchem01.mp3" type="audio/mpeg" />
                                                        </audio>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wizard-navigation">
                                            <ul className="nav nav-pills">
                                                <li className="active" style={{ width: '33.3333%' }}>
                                                    <a href="#about" data-toggle="tab" aria-expanded="true">Nghe và thu nạp từ vựng</a>
                                                </li>
                                                <li style={{ width: '33.3333%' }}>
                                                    <a href="#account" data-toggle="tab">Hình ảnh và âm thanh tương tự</a>
                                                </li>
                                                <li style={{ width: '33.3333%' }}>
                                                    <a href="#address" data-toggle="tab">Bài tập ứng dụng</a>
                                                </li>
                                            </ul>
                                            <div className="moving-tab" style={{ width: '380px', transform: 'translate3d(-8px, 0px, 0px)', transition: 'transform 0s ease 0s' }}>Nghe và thu nạp từ vựng</div></div>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="about">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-6" style={{ width: '95%' }}>
                                                            <div className="panel-group active" id="accordion" role="tablist" aria-multiselectable="true">
                                                                <div className="panel panel-default">
                                                                    <div className="panel-heading" role="tab" id="headingOne">
                                                                        <h4 className="panel-title">
                                                                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className>
                                                                                Unit 1: COMMUNICATION
                                  </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true" style={{}}>
                                                                        <div className="content_one panel-body">
                                                                            <div className="iteam iteam_one">
                                                                                <div className="content_text">
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                          Dolores atque maxime
                                          voluptate</p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                          Dolores atque maxime
                                          voluptate</p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                          Dolores atque maxime
                                          voluptate</p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                          Dolores atque maxime
                                          voluptate</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="iteam_one">
                                                                                <div className="col-md-2">
                                                                                    <p className="actor-part1">Name:</p>
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                      Dolores atque maxime
                                        voluptate</p>
                                                                                </div>
                                                                                <div className="col-md-2">
                                                                                    <p className="actor-part1">Name:</p>
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                      Dolores atque maxime
                                        voluptate</p>
                                                                                </div>
                                                                                <div className="col-md-2">
                                                                                    <p className="actor-part1">Name:</p>
                                                                                </div>
                                                                                <div className="col-md-10">
                                                                                    <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                      Dolores atque maxime
                                        voluptate</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-default">
                                                                    <div className="panel-heading" role="tab" id="headingTwo">
                                                                        <h4 className="panel-title">
                                                                            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                                PRACTICE: UNIT 1 COMMUNICATION
                                  </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="false">
                                                                        <div className="panel-body col-md-12 col-xs-12 col-sm-12 col-lg-12">
                                                                            <h4 className="text-center">Bài test</h4>
                                                                            <div className="container check_box col-md-2 col-xs-2 col-sm-2 col-lg-2 ">
                                                                                <ul className="list ks-cboxtags">
                                                                                    <div className="list_text">
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxOne" defaultValue="Rainbow Dash" />
                                                                                            <label htmlFor="checkboxOne">Rainbow Dash</label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxTwo" defaultValue="Cotton Candy" defaultChecked />
                                                                                            <label htmlFor="checkboxTwo">Cotton Candy</label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxThree" defaultValue="Rarity" defaultChecked />
                                                                                            <label htmlFor="checkboxThree">Rarity</label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxFour" defaultValue="Moondancer" />
                                                                                            <label htmlFor="checkboxFour">Moondancer</label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxFive" defaultValue="Surprise" />
                                                                                            <label htmlFor="checkboxFive">Surprise</label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxSix" defaultValue="Twilight Sparkle" defaultChecked />
                                                                                            <label htmlFor="checkboxSix">Twilight
                                          </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxSeven" defaultValue="Fluttershy" />
                                                                                            <label htmlFor="checkboxSeven">Fluttershy</label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxEight" defaultValue="Derpy Hooves" />
                                                                                            <label htmlFor="checkboxEight">Hooves</label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxNine" defaultValue="Princess Celestia" defaultChecked />
                                                                                            <label htmlFor="checkboxNine">Princess
                                          </label>
                                                                                        </li>
                                                                                        <li>
                                                                                            <input type="checkbox" id="checkboxTen" defaultValue="Gusty" />
                                                                                            <label htmlFor="checkboxTen">Gusty</label>
                                                                                        </li>
                                                                                    </div>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="practice_content col-md-10 col-xs-10 col-sm-10 col-lg-10">
                                                                                <div className="content_text form-group">
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet orem ipsum sit ametorem ipsum sit ametorem ipsum sit
                                          ametorem ipsum sit ametorem ipsum sit amet <input type="text" name id className="input-part1" />,
                                                                                                                                                                                                                                      adipisicing elit.
                                                                                                                                                                                                                                      Dolores atque maxime
                                          voluptate</p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing
                                                                                          elit.
                                                                                          Dolores atque maxime
                                          voluptate <input type="text" name id className="input-part1" /></p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p><input type="text" name id className="input-part1" /> Lorem ipsum sit amet
                                          <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                                                                                                                                                                      Dolores atque maxime
                                          voluptate</p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing
                                                                                          elit.
                                          Dolores atque maxime<input type="text" name id className="input-part1" />
                                                                                            voluptate</p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet orem ipsum sit ametorem ipsum sit ametorem ipsum sit
                                          ametorem ipsum sit ametorem ipsum sit amet <input type="text" name id className="input-part1" />,
                                                                                                                                                                                                                                      adipisicing elit.
                                                                                                                                                                                                                                      Dolores atque maxime
                                          voluptate</p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing
                                                                                          elit.
                                                                                          Dolores atque maxime
                                          voluptate <input type="text" name id className="input-part1" /></p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p><input type="text" name id className="input-part1" /> Lorem ipsum sit amet
                                          <span className="voca-part1">admin</span>, adipisicing elit.
                                                                                                                                                                                                                                      Dolores atque maxime
                                          voluptate</p>
                                                                                    </div>
                                                                                    <div className="col-md-2">
                                                                                        <p className="actor-part1">Name:</p>
                                                                                    </div>
                                                                                    <div className="col-md-10">
                                                                                        <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing
                                                                                          elit.
                                          Dolores atque maxime<input type="text" name id className="input-part1" />
                                                                                            voluptate</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="account">
                                                <div className="container">
                                                    <div className="row task_two">
                                                        <div className="col-md-12">
                                                            <div id="news-slider" className="owl-carousel">
                                                                <div className="post-slide">
                                                                    <div className="post-header">
                                                                        <h4 className="title">
                                                                            <a href="#">Image </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="pic">
                                                                        <img src="assets/img/wizard-city.jpg" alt />
                                                                        <ul className="post-category">
                                                                            <li><a href="#">html</a></li>
                                                                            <li><a href="#">css</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <ul className="post-bar">
                                                                        <li><img src="assets/img/wizard-city.jpg" alt /><a href="#">Program</a></li>
                                                                        <li><i className="fas fa-volume-down" />['prougraem']</li>
                                                                    </ul>
                                                                    <p className="post-description">
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa
                                                                        efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.
                              </p>
                                                                </div>
                                                                <div className="post-slide">
                                                                    <div className="post-header">
                                                                        <h4 className="title">
                                                                            <a href="#">Latest News Post</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="pic">
                                                                        <img src="assets/img/wizard-city.jpg" alt />
                                                                        <ul className="post-category">
                                                                            <li><a href="#">html</a></li>
                                                                            <li><a href="#">css</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <ul className="post-bar">
                                                                        <li><img src="assets/img/wizard-city.jpg" alt /><a href="#">Program</a></li>
                                                                        <li><i className="fas fa-volume-down" />['prougraem']</li>
                                                                    </ul>
                                                                    <p className="post-description">
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa
                                                                        efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.
                              </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div id="news-slider" className="owl-carousel">
                                                                <div className="post-slide">
                                                                    <div className="post-header">
                                                                        <h4 className="title">
                                                                            <a href="#">Image </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="pic">
                                                                        <img src="assets/img/wizard-city.jpg" alt />
                                                                        <ul className="post-category">
                                                                            <li><a href="#">html</a></li>
                                                                            <li><a href="#">css</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <ul className="post-bar">
                                                                        <li><img src="assets/img/wizard-city.jpg" alt /><a href="#">Program</a></li>
                                                                        <li><i className="fas fa-volume-down" />['prougraem']</li>
                                                                    </ul>
                                                                    <p className="post-description">
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa
                                                                        efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.
                              </p>
                                                                </div>
                                                                <div className="post-slide">
                                                                    <div className="post-header">
                                                                        <h4 className="title">
                                                                            <a href="#">Latest News Post</a>
                                                                        </h4>
                                                                    </div>
                                                                    <div className="pic">
                                                                        <img src="assets/img/wizard-city.jpg" alt />
                                                                        <ul className="post-category">
                                                                            <li><a href="#">html</a></li>
                                                                            <li><a href="#">css</a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <ul className="post-bar">
                                                                        <li><img src="assets/img/wizard-city.jpg" alt /><a href="#">Program</a></li>
                                                                        <li><i className="fas fa-volume-down" />['prougraem']</li>
                                                                    </ul>
                                                                    <p className="post-description">
                                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida nulla eu massa
                                                                        efficitur, eu hendrerit ipsum efficitur. Morbi vitae velit ac.
                              </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="address">
                                                <p>Bài tập ứng dụng</p>
                                            </div>
                                        </div>
                                        <div className="wizard-footer">
                                            <div className="pull-right">
                                                <input type="button" className="btn btn-next btn-fill btn-success btn-wd" name="next" defaultValue="Next" />
                                                <input type="button" className="btn btn-finish btn-fill btn-success btn-wd" name="finish" defaultValue="Finish" style={{ display: 'none' }} />
                                            </div>
                                            <div className="pull-left">
                                                <input type="button" className="btn btn-previous btn-fill btn-default btn-wd disabled" name="previous" defaultValue="Previous" />
                                            </div>
                                            <div className="clearfix" />
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

export default Card_wizard;