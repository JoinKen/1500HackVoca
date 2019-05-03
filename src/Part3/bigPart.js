import React, { Component } from 'react'
import Practice from './practice';
import Tab3 from './tab3';

export default class bigPart extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            {/*      Wizard container        */}
                            <div className="wizard-container">
                                <div
                                    className="card wizard-card"
                                    id="wizardProfile"
                                    data-color="green"
                                >
                                    <form action method noValidate="novalidate">
                                        {/*        You can switch " data-color="purple" "  with one of the next bright colors: "green", "orange", "red", "blue"       */}
                                        <div className="wizard-header">
                                            <div className="container ">
                                                <div className="row tab_play">
                                                    <div className="col-md-6"></div>
                                                    {/* <h3 class="progress-title">CSS3</h3> */}
                                                    <div className="col-md-6">

                                                        <div className="holder">
                                                            <div className="audio green-audio-player">
                                                                <div className="loading">
                                                                    <div className="spinner" />
                                                                </div>
                                                                <div className="play-pause-btn">
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width={18}
                                                                        height={24}
                                                                        viewBox="0 0 18 24"
                                                                    >
                                                                        <path
                                                                            fill="#566574"
                                                                            fillRule="evenodd"
                                                                            d="M18 12L0 24V0"
                                                                            className="play-pause-icon"
                                                                            id="playPause"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <div className="controls">
                                                                    <span className="current-time">0:00</span>
                                                                    <div className="slider" data-direction="horizontal">
                                                                        <div className="progress">
                                                                            <div
                                                                                className="pin"
                                                                                id="progress-pin"
                                                                                data-method="rewind"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <span className="total-time">0:00</span>
                                                                </div>
                                                                <div className="volume">
                                                                    <div className="volume-btn">
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            width={24}
                                                                            height={24}
                                                                            viewBox="0 0 24 24"
                                                                        >
                                                                            <path
                                                                                fill="#566574"
                                                                                fillRule="evenodd"
                                                                                d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"
                                                                                id="speaker"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                    <div
                                                                        className="volume-controls hidden"
                                                                        style={{ bottom: "-164px", left: "-3px" }}
                                                                    >
                                                                        <div className="slider" data-direction="vertical">
                                                                            <div className="progress">
                                                                                <div
                                                                                    className="pin"
                                                                                    id="volume-pin"
                                                                                    data-method="changeVolume"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <audio>
                                                                    <source
                                                                        src="./index/chuyenchem/Chuyenchem01.mp3"
                                                                        type="audio/mpeg"
                                                                    />
                                                                </audio>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wizard-navigation">
                                            <ul className="nav nav-pills">
                                                <li className="active" style={{ width: "33.33%" }}>
                                                    <a
                                                        aria-expanded="false"
                                                        href="#about"
                                                        data-toggle="tab"
                                                    >
                                                        Nghe và thu nạp từ vựng
                  </a>
                                                </li>
                                                <li style={{ width: "33.33%" }}>
                                                    <a
                                                        aria-expanded="false"
                                                        href="#account"
                                                        data-toggle="tab"
                                                    >
                                                        Hình ảnh và âm thanh tương tự
                  </a>
                                                </li>
                                                <li style={{ width: "33.33%" }}>
                                                    <a
                                                        aria-expanded="true"
                                                        href="#address"
                                                        data-toggle="tab"
                                                    >
                                                        Bài tập ứng dụng
                  </a>
                                                </li>
                                            </ul>
                                            <div
                                                className="moving-tab"
                                                style={{
                                                    transition: "transform",
                                                    width: 380,
                                                    transform: "translate3d(-8px, 0px, 0px)"
                                                }}
                                            >
                                                Nghe và thu nạp từ vựng
              </div>
                                        </div>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="about">
                                                <div className="container">
                                                    <div className="row">
                                                        <div
                                                            className="col-md-6"
                                                            style={{ width: "90%" }}
                                                        >
                                                            <h1>
                                                                <span>
                                                                    <i className="fas fa-book-open" />
                                                                </span>{" "}
                                                                Unit 1: COMMUNICATION
                      </h1>
                                                            <div
                                                                className="panel-collapse collapse in"
                                                                id="collapseOne"
                                                                role="tabpanel"
                                                                aria-labelledby="headingOne"
                                                            >
                                                                <div className="btn_all">
                                                                    <ul>
                                                                        <li>
                                                                            <button className="btn_item btn btn-danger">
                                                                                Adjective
                              </button>
                                                                        </li>
                                                                        <li>
                                                                            <button className="btn_item btn btn-primary">
                                                                                Adverb
                              </button>
                                                                        </li>
                                                                        <li>
                                                                            <button className="btn_item btn btn-success">
                                                                                Verb
                              </button>
                                                                        </li>
                                                                        <li>
                                                                            <button className="btn_item btn btn-secondary">
                                                                                Noun
                              </button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="check_text">
                                                                    <section>
                                                                        <h1>Checkboxes that work goodly</h1>
                                                                        <div className="row">
                                                                            <div className="col-md-2">
                                                                                <input id="one" type="checkbox" />
                                                                                <label htmlFor="one">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="two" type="checkbox" />
                                                                                <label htmlFor="two">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="three" type="checkbox" />
                                                                                <label htmlFor="three">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="four" type="checkbox" />
                                                                                <label htmlFor="four">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <input id="five" type="checkbox" />
                                                                                <label htmlFor="five">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="six" type="checkbox" />
                                                                                <label htmlFor="six">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="seven" type="checkbox" />
                                                                                <label htmlFor="seven">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="eight" type="checkbox" />
                                                                                <label htmlFor="eight">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <input id="night" type="checkbox" />
                                                                                <label htmlFor="night">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="ten" type="checkbox" />
                                                                                <label htmlFor="ten">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="eleven" type="checkbox" />
                                                                                <label htmlFor="eleven">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="twelth" type="checkbox" />
                                                                                <label htmlFor="twelth">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <input id="one" type="checkbox" />
                                                                                <label htmlFor="one">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="two" type="checkbox" />
                                                                                <label htmlFor="two">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="three" type="checkbox" />
                                                                                <label htmlFor="three">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="four" type="checkbox" />
                                                                                <label htmlFor="four">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <input
                                                                                    id="thirteen"
                                                                                    type="checkbox"
                                                                                />
                                                                                <label htmlFor="thirteen">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input
                                                                                    id="fourteen"
                                                                                    type="checkbox"
                                                                                />
                                                                                <label htmlFor="fourteen">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input
                                                                                    id="fiveteen"
                                                                                    type="checkbox"
                                                                                />
                                                                                <label htmlFor="fiveteen">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="sixteen" type="checkbox" />
                                                                                <label htmlFor="sixteen">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <input
                                                                                    id="seventeen"
                                                                                    type="checkbox"
                                                                                />
                                                                                <label htmlFor="seventeen">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input
                                                                                    id="eightteen"
                                                                                    type="checkbox"
                                                                                />
                                                                                <label htmlFor="eightteen">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input
                                                                                    id="nineteen"
                                                                                    type="checkbox"
                                                                                />
                                                                                <label htmlFor="nineteen">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                                <input id="twenty" type="checkbox" />
                                                                                <label htmlFor="twenty">
                                                                                    <span />
                                                                                    Label
                                  <ins>
                                                                                        <i> Label</i>
                                                                                    </ins>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </section>
                                                                </div>
                                                                <div className="form_text">
                                                                    <div className="title_text">
                                                                        <label
                                                                            className="tittle_first"
                                                                            htmlFor="title"
                                                                        >
                                                                            Tiêu đề:
                            </label>
                                                                        <div className="item_form">
                                                                            <div className="form-group is-empty">
                                                                                <input
                                                                                    className="form-control title_input"
                                                                                    id="text_label"
                                                                                    type="text"
                                                                                />
                                                                                <span className="material-input" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="content_label">
                                                                        <label
                                                                            className="tittle_first"
                                                                            htmlFor="text"
                                                                        >
                                                                            Input text:
                            </label>
                                                                        <textarea
                                                                            className="input_label"
                                                                            rows={4}
                                                                            cols={130}
                                                                            defaultValue={
                                                                                "                                                        "
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* </div>
              </div> */}
                                            </div>
                                            <div className="tab-pane" id="account">
                                                <Practice />
                                            </div>
                                            <div className="tab-pane" id="address">
                                                <Tab3 />
                                            </div>
                                        </div>
                                    </form>
                                    <div className="wizard-footer">
                                        <div className="pull-right">
                                            <input
                                                name="next"
                                                className="btn btn-next btn-fill btn-success btn-wd"
                                                type="button"
                                                defaultValue="Next"
                                            />
                                            <input
                                                name="finish"
                                                className="btn btn-finish btn-fill btn-success btn-wd"
                                                style={{ display: "none" }}
                                                type="button"
                                                defaultValue="Finish"
                                            />
                                        </div>
                                        <div className="pull-left">
                                            <input
                                                name="previous"
                                                className="btn btn-previous btn-fill btn-default btn-wd disabled"
                                                type="button"
                                                defaultValue="Previous"
                                            />
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                            </div>
                            {/* wizard container */}
                        </div>
                    </div>
                    {/* end row */}
                </div>

            </div>
        )
    }
}
