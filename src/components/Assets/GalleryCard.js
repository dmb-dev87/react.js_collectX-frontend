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
          <div className="image-collection">
              <div ><img className="asset-gallery-img" src={require("assets/img/asset-gallery-lt.png")} /></div>
              <div ><img className="asset-gallery-img"src={require("assets/img/asset-gallery-rt.png")} /></div>
              <div><img className="asset-gallery-img"src={require("assets/img/asset-gallery-lb.png")} /></div>
              <div><img className="asset-gallery-img"src={require("assets/img/asset-gallery-rb.png")} /></div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default GalleryCard;
