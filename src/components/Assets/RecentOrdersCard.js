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

class RecentOrders extends React.Component {
  render() {
    const {image, title, name, content} = this.props;
    return (
      <Card className="card-plain recent-orders-card">
        <CardHeader >
            <h3>Recent Orders</h3>
        </CardHeader>
        <CardBody>
        <table className="orders-table">
          <tr>
            <th>Price(USD)</th>
            <th className="text-align-right">Amount</th> 
            <th className="text-align-right">TOTAL</th>
          </tr>
          <tr className="normal">
            <td>Jill</td>
            <td className="text-align-right">Smith</td>
            <td className="text-align-right">50</td>
          </tr>
          <tr className="success">
            <td>Eve</td>
            <td className="text-align-right">Jackson</td>
            <td className="text-align-right">94</td>
          </tr>
          <tr className="normal">
            <td>John</td>
            <td className="text-align-right">Doe</td>
            <td className="text-align-right">80</td>
          </tr>
        </table>
        </CardBody>
      </Card>
    );
  }
}

export default RecentOrders;
