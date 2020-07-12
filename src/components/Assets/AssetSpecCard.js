/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Button,
  CardFooter
} from "reactstrap";

class AssetSpecCard extends React.Component {
  render() {
    const { image, title, name, content } = this.props;
    return (
      <Card className="card-plain asset-spec-card">
        <CardHeader >
        <Row>
          <Col className="text-left">
            <CardTitle tag="h2">Asset Specs</CardTitle>
          </Col>
        </Row>
        </CardHeader>
        <CardBody>
            <Row> <Col className="spec-field">Rarity</Col> <Col className="spec-value">1 of 53</Col> </Row>
            <Row> <Col className="spec-field">Asset Grade</Col> <Col className="spec-value">9/10</Col> </Row>
            <Row> <Col className="spec-field">Asset Type</Col> <Col className="spec-value">Sports Card</Col> </Row>
            <Row> <Col className="spec-field">Manufacturer</Col> <Col className="spec-value">Fleer</Col> </Row>
            <Row> <Col className="spec-field">Authentication</Col> <Col className="spec-value">SGC</Col> </Row>
            <Row> <Col className="spec-field">Sports</Col> <Col className="spec-value">Basketball</Col> </Row>
            <Row> <Col className="spec-field">League</Col> <Col className="spec-value">NBA</Col> </Row>
            <Row> <Col className="spec-field">Team</Col> <Col className="spec-value">Chicago</Col> </Row>
            <Row> <Col className="spec-field">Season</Col> <Col className="spec-value">1986</Col> </Row>

            
        </CardBody>
        <CardFooter>
          <Row> <Button className="spec-button">See More Specs</Button> </Row>
        </CardFooter>
      </Card>
    );
  }
}

export default AssetSpecCard;
