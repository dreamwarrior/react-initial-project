import React, { Component } from 'react';
import Title from './Title';
import Campaign from './Campaign';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 col-md-2 sidebar">
                        <ul className="nav nav-sidebar">
                            <li className="active"><a href="https://www.ipay.com.bd">Overview <span className="sr-only">(current)</span></a></li>
                            <li><a href="https://www.ipay.com.bd">Reports</a></li>
                            <li><a href="https://www.ipay.com.bd">Analytics</a></li>
                            <li><a href="https://www.ipay.com.bd">Export</a></li>
                        </ul>
                        <ul className="nav nav-sidebar">
                            <li><a href="">Nav item</a></li>
                            <li><a href="">Nav item again</a></li>
                            <li><a href="">One more nav</a></li>
                            <li><a href="">Another nav item</a></li>
                            <li><a href="">More navigation</a></li>
                        </ul>
                        <ul className="nav nav-sidebar">
                            <li><a href="">Nav item again</a></li>
                            <li><a href="">One more nav</a></li>
                            <li><a href="">Another nav item</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                        <Title value="Dashboard"/>

                        <div className="row placeholders">
                            <div className="col-xs-6 col-sm-3 placeholder">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
                                    <h4>Label</h4>
                                    <span className="text-muted">Something else</span>
                            </div>
                            <div className="col-xs-6 col-sm-3 placeholder">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
                                    <h4>Label</h4>
                                    <span className="text-muted">Something else</span>
                            </div>
                            <div className="col-xs-6 col-sm-3 placeholder">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
                                    <h4>Label</h4>
                                    <span className="text-muted">Something else</span>
                            </div>
                            <div className="col-xs-6 col-sm-3 placeholder">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
                                    <h4>Label</h4>
                                    <span className="text-muted">Something else</span>
                            </div>
                        </div>

                        <Campaign/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
