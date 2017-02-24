'use strict';

import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <footer className="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h3 className="lead"><strong>Informations</strong> and <strong>Copyright</strong></h3>
                            <p>Powered by Node.js, ElasticSearch and ReactJS</p>
                        </div>
                        <div className="col-sm-7 hidden-xs">
                            <h3 className="lead"><a href="link">example link</a></h3>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
