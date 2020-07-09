/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardTitle,
  Col
} from "reactstrap";

class StampCard extends React.Component {
  render() {
    const {image, title, content, percent} = this.props;
    return (
      <Card className="card-image">
        <CardBody className="card-image-body">
          <div className="card-image-div-image">
            <img alt="..." src={image} />
          </div>
          <div className="card-image-div-description">
            <h2>{content}</h2>
            <h2>{title}</h2>
          </div>
          <div className="card-image-div-btn">
            {percent < 0 ?
              <Button className="negotive">{percent}%</Button> :
              <Button className="positive">+{percent}%</Button>
            }
            <Button>Detail</Button>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default StampCard;
