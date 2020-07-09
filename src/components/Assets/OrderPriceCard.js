/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col
} from "reactstrap";

class OrderPriceCard extends React.Component {
  render() {
    const {image, title, name, content} = this.props;
    return (
      <Card className="card-plain order-price-card">
        <CardHeader >
        </CardHeader>
        <CardBody>
        </CardBody>
      </Card>
    );
  }
}

export default OrderPriceCard;
