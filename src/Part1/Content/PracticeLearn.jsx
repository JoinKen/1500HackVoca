import React, { Component } from 'react';
import TitleUnit from "./ParticeLearn/TitleUnit";
import VocaCheck from "./ParticeLearn/VocaCheck";

class PracticeLearn extends Component {

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                        <TitleUnit />
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="true" style={{}}>
                        <div className="panel-body col-md-12 col-xs-12 col-sm-12 col-lg-12">
                            <h4 className="text-center">Bài test</h4>
                            <div className="container check_box col-md-2 col-xs-2 col-sm-2 col-lg-2 ">
                                <ul className="list ks-cboxtags">
                                    <div className="list_text">
                                        <VocaCheck />

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
                                            voluptate <input type="text" name id className="input-part1" />
                                        </p>
                                    </div>
                                    <div className="col-md-2">
                                        <p className="actor-part1">Name:</p>
                                    </div>
                                    <div className="col-md-10">
                                        <p><input type="text" name id className="input-part1" /> Lorem ipsum sit amet
                                                span className="voca-part1">admin</span>, adipisicing elit.
                                    Dolores atque maxime
            voluptate
                                        </p>
                                </div>
                                <div className="col-md-2">
                                    <p className="actor-part1">Name:</p>
                                </div>
                                <div className="col-md-10">
                                    <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing
                                      elit.
                                            Dolores atque maxime<input type="text" name id className="input-part1" />
                                        voluptate
                                        </p>
                                </div>
                                <div className="col-md-2">
                                    <p className="actor-part1">Name:</p>
                                </div>
                                <div className="col-md-10">
                                    <p>Lorem ipsum sit amet orem ipsum sit ametorem ipsum sit ametorem ipsum sit
                                            ametorem ipsum sit ametorem ipsum sit amet <input type="text" name id className="input-part1" />,
                                                    adipisicing elit.
                                                    Dolores atque maxime
                            voluptate
                                        </p>
                                </div>
                                <div className="col-md-2">
                                    <p className="actor-part1">Name:</p>
                                </div>
                                <div className="col-md-10">
                                    <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing
                                      elit.
                                      Dolores atque maxime
                                            voluptate <input type="text" name id className="input-part1" />
                                    </p>
                                </div>
                                <div className="col-md-2">
                                    <p className="actor-part1">Name:</p>
                                </div>
                                <div className="col-md-10">
                                    <p><input type="text" name id className="input-part1" /> Lorem ipsum sit amet
                                            <span className="voca-part1">admin</span>, adipisicing elit.
                                                    Dolores atque maxime
                            voluptate
                                        </p>
                                </div>
                                <div className="col-md-2">
                                    <p className="actor-part1">Name:</p>
                                </div>
                                <div className="col-md-10">
                                    <p>Lorem ipsum sit amet <span className="voca-part1">admin</span>, adipisicing
                                      elit.
                                            Dolores atque maxime<input type="text" name id className="input-part1" />
                                        voluptate
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div >
        );
    }
}

export default PracticeLearn;