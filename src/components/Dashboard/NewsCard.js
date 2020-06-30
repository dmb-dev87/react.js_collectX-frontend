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
} from "reactstrap";

class NewsCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      data ? <Card className="card-news">
        <CardBody>
          <div className="card-image">
            <img
              alt="..."
              className="avatar"
              src={data["image"]}
            />
          </div>
          <div className="card-description">
            <p>{data["description"]}</p>
          </div>
          <div className="card-detail">
            <p>{data["read"]} Read</p>
            <p>{data["wallet"]}</p>
          </div>
        </CardBody>
      </Card> : <></>
    );
  }
}

export default NewsCard;
