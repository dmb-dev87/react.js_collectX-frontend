/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

import ActiveCard from "./ActiveCard";

class ActiveMarkets extends React.Component {
  render() {
    const { activeMarkets } = this.props;
    return (
      <Card className="card-plain">
        <CardHeader>
          <Row>
            <Col className="text-left">
              <CardTitle tag="h2">Active Markets</CardTitle>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          {
            activeMarkets && activeMarkets.map((item) => (
              <ActiveCard data={item} key={item.id}></ActiveCard>
            ))
          }
          <Button className="more-button">See More Markets</Button>
        </CardBody>
      </Card>
    );
  }
}

export default ActiveMarkets;
