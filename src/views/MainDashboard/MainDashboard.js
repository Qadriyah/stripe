import React, { Component } from 'react';
import ShippingAddress from '../../components/ShippingAddress/ShippingAddressContainer';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethodContainer';
import './MainDashboard.scss';

class MainDashboard extends Component {
  state = {
    status: true
  };

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
            <PaymentMethod
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
