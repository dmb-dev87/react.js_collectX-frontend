/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { 
  Card,
} from "reactstrap";

class MJRChartCard extends React.Component {
  render() {
    const {image, title, name, content} = this.props;
    return (
      <Card className="card-plain mjr-chart-card">
        <img src={require("assets/img/mjrtrade.png")} />
      </Card>
    );
  }
}

export default MJRChartCard;
