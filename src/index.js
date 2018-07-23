import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Info = {
    logo: "Big Bank, Inc",
    cardNumber: "1234 5678 8765 4321",
    firstFour: "1234",
    expiration: "8/19",
    name: "CARDHOLDER NAME"
};

class Card extends Component {

    render() {
        return(
        <div className="card">
            <div className="logo">
                <p className="logo-text">{this.props.obj.logo}</p>
            </div>
            <div className="info">
                <p className="card-number">{this.props.obj.cardNumber}</p>
                <p className="card-first-four">{this.props.obj.firstFour}</p>
                <p className="card-expiration">{this.props.obj.expiration}</p>
                <p className="card-name">{this.props.obj.name}</p>
            </div>
        </div>
        )
    }

};


ReactDOM.render(<Card obj={Info} />, document.getElementById('root'));
