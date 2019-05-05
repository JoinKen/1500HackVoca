import React, { Component } from 'react';

class Vocabolary extends Component {
    render() {
        return (
            <div>
                <div className="social-share-wrap text-left">
                    <div className="cover">
                        <img className="image"
                            src="https://cdn.img.com/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg" />
                    </div>
                    <div className="content">
                        <label className="label" htmlFor="toggle">1</label>
                        <div className="title col-lg-12">
                            <b className="col-lg-6">Admit</b>
                            <b className="col-lg-6">{'{'}phien am{'}'}</b>
                        </div>
                        <div className="text"><span className="voca-part1">Ăn mít</span> không hết thì <span
                            className="voca-part1-blue">thừa nhận</span> đi! Hỏng
                        hết rồi nên cho vào tủ lạnh z
                                        </div>
                        <div className="text-example">to agree, often unwillingly, that something is true bootstrap.
                                        </div>
                        <div className="examples">
                            <div className="item-example">&gt; I never admitted I did that</div>
                            <div className="item-example">&gt; He never admits when he make mis-takes</div>
                        </div>
                        <div className="price" />
                        <a className="addvoca" target="_blank"
                            href="http://codecanyon.net/item/mk-flat-pricing-table/13404608?ref=khadkamhn"><i
                                className="fa fa-plus-circle" /> Add My List</a><br />
                        <a className="removevoca" target="_blank"
                            href="http://codecanyon.net/item/mk-flat-pricing-table/13404608?ref=khadkamhn"><i
                                className="fa fa-minus-circle" /> Remove My Vocabolary</a>
                    </div>
                    <div className="social-share-overlay">
                        <label className="close" htmlFor="toggle">×</label>
                        <div className="social-share-links">
                            <a target="_blank"
                                href="https://www.facebook.com/sharer/sharer.php?display=popup&u=http%3A%2F%2Fcodecanyon.net%2Fitem%2Fmk-flat-pricing-table%2F13404608%3Fref%3Dkhadkamhn"><i
                                    className="fa fa-facebook" /> Facebook</a>
                            <a target="_blank"
                                href="https://twitter.com/intent/tweet?text=Check+out+%27MK+Flat+Pricing+Table%27+on+%23EnvatoMarket+by+%40khadkamhn+%23codecanyon&url=http%3A%2F%2Fcodecanyon.net%2Fitem%2Fmk-flat-pricing-table%2F13404608%3Fref%3Dkhadkamhn"><i
                                    className="fa fa-twitter" /> Twitter</a>
                            <a target="_blank"
                                href="https://pinterest.com/pin/create/button?description=MK+Flat+Pricing+Table&media=http%3A%2F%2F0.s3.envato.com%2Ffiles%2F156087519%2Fmk_flat_price_table.png&url=http%3A%2F%2Fcodecanyon.net%2Fitem%2Fmk-flat-pricing-table%2F13404608%3Fref%3Dkhadkamhn"><i
                                    className="fa fa-pinterest" /> Pinterest</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Vocabolary;