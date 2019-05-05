import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div id="navbar-full">
                    <div id="navbar">
                        {/*    
            navbar-default can be changed with navbar-ct-blue navbar-ct-azzure navbar-ct-red navbar-ct-green navbar-ct-orange  
            */}
                        <nav className="navbar navbar-ct-blue navbar-fixed-top navbar-transparent" role="navigation">
                            <div className="container">
                                {/* Brand and toggle get grouped for better mobile display */}
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    <a className="navbar-brand navbar-brand-logo" href="true">
                                        <div className="logo hiddenScroll" style={{ visibility: 'visible' }}>
                                            <img src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png" alt="true" />
                                        </div>
                                        <div className="brand"> Creative Tim </div>
                                        <div className="ripple-container" /></a>
                                </div>
                                {/* Collect the nav links, forms, and other content for toggling */}
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li>
                                            <a href="javascript:void(0);" data-toggle="search" className="hidden-xs">
                                                <i className="pe-7s-search" />
                                                {/* <p class="hiddenScroll">Search</p> */}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="true">
                                                <i className="pe-7s-mail">
                                                    <span className="label">23</span>
                                                </i>
                                                {/* <p class="hiddenScroll">Messages</p> */}
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="true" className="dropdown-toggle" data-toggle="dropdown">
                                                <i className="pe-7s-user" />
                                                {/* <p class="hiddenScroll">Account */}
                                                <b className="caret" />
                                                <p />
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="true">Action</a>
                                                </li>
                                                <li>
                                                    <a href="true">Another action</a>
                                                </li>
                                                <li>
                                                    <a href="true">Something</a>
                                                </li>
                                                <li>
                                                    <a href="true">Another action</a>
                                                </li>
                                                <li>
                                                    <a href="true">Something</a>
                                                </li>
                                                <li className="divider" />
                                                <li>
                                                    <a href="true">Separated link</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form className="navbar-form navbar-right navbar-search-form" role="search">
                                        <div className="form-group is-empty">
                                            <input type="text" defaultValue className="form-control" placeholder="Search..." />
                                            <span className="material-input" /></div>
                                    </form>
                                </div>
                                {/* /.navbar-collapse */}
                            </div>
                            {/* /.container-fluid */}
                        </nav>
                        <div className="blurred-container pull-center">
                            <div className="img-src" style={{ backgroundImage: 'url("../img/bg.jpg")' }} />
                            <div className="container tim-container" style={{ maxWidth: '800px', paddingTop: '110px' }}>
                            </div>
                            <div className="btn_navigation" style={{ paddingLeft: '85px' }}>
                                <ul className="col-lg-12 col-xs-12 col-md-12 col-sm-12 pull-center">
                                    <li><button className="navagation btn btn-success voca-style">MY PROCESS</button></li>
                                    <li><button className="navagation btn btn-danger voca-style">MY VOCABOLARY</button></li>
                                    <li><button className="navagation btn btn-primary voca-style">MY TOPIC</button></li>
                                    <li><button className="navagation btn btn-secondary voca-style">ABOUT US</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/*  end navbar */}
                </div>

            </div>
        );
    }
}

export default Header;