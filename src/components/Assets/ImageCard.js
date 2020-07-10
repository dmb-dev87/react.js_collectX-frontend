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

class ImageCard extends React.Component {
  render() {
    const {image, title, name, content} = this.props;
    return (
      <Card className="card-image">
        <CardBody className="card-image-body">
          <div className="card-image-div-image">
            <img
                alt="..."
                src={image}
              />
          </div>
          <div className="card-image-div-description">
            <h2>{name}</h2>
            <h2>{content}</h2>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default ImageCard;
