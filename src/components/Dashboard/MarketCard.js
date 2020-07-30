import React from "react";

import {
    Card,
    CardBody,
    Row,
    Col,
} from "reactstrap";

class MarketCard extends React.Component {
    render() {
        const { data } = this.props;
        return (
            data ? <Card className="card-market">
                <CardBody>
                    <Row>
                        <Col md="6">
                            <img
                                alt="..."
                                className="avatar"
                                src={data["image"]}
                            />
                            <p>{data["unit"]}</p>
                        </Col>
                        <Col md="3">
                            <p>${data["value"]}</p>
                        </Col>
                        <Col md="3">
                            {data["data"]}%
                        </Col>
                    </Row>
                </CardBody>
            </Card> : <></>
        );
    }
}

export default MarketCard;
