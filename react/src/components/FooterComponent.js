import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h4>Supported Companies</h4>
                    </div>
                </div>
                <div className="row footerCompanies">
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <p><img src="assets/images/bolt.jpg" width="30px" height="30px"></img> Bolt</p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <p><img src="assets/images/uber.jpg" width="30px" height="30px"></img> Uber</p>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-center">
                        <p><img src="assets/images/uklon.jpg" width="30px" height="30px"></img> Uklon</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;