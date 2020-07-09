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

class GalleryCard extends React.Component {
  render() {
    const {image, title, name, content} = this.props;
    return (
      <Card className="card-plain gallery-card">
        <CardHeader >
        <Row>
          <Col className="text-left">
            <CardTitle tag="h2">Gallery</CardTitle>
          </Col>
        </Row>
        </CardHeader>
        <CardBody>
            <Row>
              <Col xl="6" lg="6" md="6" xs="6">                
                <img className="asset-gallery-img" src={require("assets/img/asset-gallery-lt.png")} />
              </Col>
              <Col xl="6" lg="6" md="6" xs="6">                
                <img className="asset-gallery-img"src={require("assets/img/asset-gallery-rt.png")} />
              </Col>
            </Row>
            <Row>
              <Col xl="6" lg="6" md="6" xs="6">                
                <img className="asset-gallery-img" src={require("assets/img/asset-gallery-lb.png")} />
              </Col>
              <Col xl="6" lg="6" md="6" xs="6">                
                <img className="asset-gallery-img"src={require("assets/img/asset-gallery-rb.png")} />
              </Col>
            </Row>
        </CardBody>
      </Card>
    );
  }
}

export default GalleryCard;
