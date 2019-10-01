import React, { Component } from 'react';
import ShippingAddress from '../../components/ShippingAddress/ShippingAddress';
import PaymentMethond from '../../components/PaymentMethod/PaymentMethond';
import './MainDashboard.scss';

class MainDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    };
  }

  handleButtonClick = () => {
    const { status } = this.state;
    this.setState({ status: !status });
  };

  render() {
    const { status } = this.state;
    return (
      <div className="Main-dashboard">
        <div className="row">
          <div className="col-12">
            <ShippingAddress
              handleButtonClick={this.handleButtonClick}
              status={status}
            />
            <PaymentMethond
              handleButtonClick={this.handleButtonClick}
              status={status}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainDashboard;
