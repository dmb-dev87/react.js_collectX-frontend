/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { 
} from "reactstrap";

import MailLoginForm from "./MailLoginForm";
import PhoneLoginForm from "./PhoneLoginForm";

class LogoImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="logo-content">
        <div className="description">
          <h1>CollectX</h1>
          <h2>Fractional Ownership Of Rare Collectibles A New Asset Class</h2>
        </div>
      </div>
      );
    }
}

export default LogoImage;
