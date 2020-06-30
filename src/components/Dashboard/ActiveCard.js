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

class ActiveCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      data ? <Card className="card-active">
        <CardBody>
          <div className="card-image">
            <img
              alt="..."
              className="avatar"
              src={data["image"]}
            />
          </div>
          <div className="card-unit">
            <p>{data["unit"]}</p>
            <p>${data["value"]}</p>
          </div>
          <div className="card-data">
            {data["data"]}%
          </div>
        </CardBody>
      </Card> : <></>
    );
  }
}

export default ActiveCard;
