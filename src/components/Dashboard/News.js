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

import NewsCard from "./NewsCard";

class News extends React.Component {
  render() {
    const { news } = this.props
    return (
      <Card className="card-plain">
        <CardHeader>
          <Row>
            <Col className="text-left">
              <CardTitle tag="h2">News</CardTitle>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          {
            news && news.map((item) => (
              <NewsCard data={item} key={item.id}></NewsCard>
            ))
          }
          <Button className="more-button">Read More News</Button>
        </CardBody>
      </Card>
    );
  }
}

export default News;
