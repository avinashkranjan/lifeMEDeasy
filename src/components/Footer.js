import React from 'react';
import './FooterStyle.css';

function Footer(props) {
    return (
        <div className="footer mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p className="mt-3">Made with ❤ and a cup of coffee, at QuantumHacks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;