import React from "react";
import { Link } from "react-router-dom";

import {Card, CardHeader, CardBody, CardTitle, Row, Col, Button} from "reactstrap";

import ActiveCard from "./ActiveCard";

class ActiveMarkets extends React.Component {
    render() {
        const { activeMarkets } = this.props;
        return (
            <Card className="card-plain">
                <CardHeader>
                    <Row>
                        <Col className="text-left">
                            <CardTitle tag="h2">Biggest Movers</CardTitle>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    {
                        activeMarkets && activeMarkets.map((item, key) => (
                            <Link to="/MJRTrade" key={key}>
                                <ActiveCard data={item} key={item.id}></ActiveCard>
                            </Link>
                        ))
                    }
                    <Button className="more-button">See More Markets</Button>
                </CardBody>
            </Card>
        );
    }
}

export default ActiveMarkets;
