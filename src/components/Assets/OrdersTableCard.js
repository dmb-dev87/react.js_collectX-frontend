/*eslint-disable*/
import React from "react";

// reactstrap components
import {
    Row,
    Card,
    CardHeader,
    CardBody,
    Col,
    ButtonGroup, 
    Button
} from "reactstrap";

class OrdersTableCard extends React.Component {
    render() {
        const { image, title, name, content } = this.props;
        return (
            <Card className="card-plain orders-table-card">
                <CardHeader >
                    <Row>
                        <Col className="mjtrade-order-mode">
                            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                                <Button className="order-mode-1"><div className="style-blue"></div><div className="style-normal"></div><div className="style-normal"></div><div className="style-green"></div></Button>
                                <Button className="order-mode-2"><div className="style-normal"></div><div className="style-normal"></div><div className="style-normal"></div><div className="style-green"></div></Button>
                                <Button className="order-mode-3"><div className="style-blue"></div><div className="style-normal"></div><div className="style-normal"></div><div className="style-normal"></div></Button>
                            </ButtonGroup>
                        </Col>
                        <Col>
                            <input type="text" type="number" />
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <table className="orders-table">
                        <tr>
                            <th>Price(USD)</th>
                            <th className="text-align-right">Amount</th>
                            <th className="text-align-right">TOTAL</th>
                        </tr>
                        <tr className="normal">
                            <td>131.609</td>
                            <td className="text-align-right">4.21</td>
                            <td className="text-align-right">182.973</td>
                        </tr>
                        <tr className="normal">
                            <td>127.443</td>
                            <td className="text-align-right">12</td>
                            <td className="text-align-right">89.901</td>
                        </tr>
                        <tr className="normal">
                            <td>127.236</td>
                            <td className="text-align-right">119</td>
                            <td className="text-align-right">252.310</td>
                        </tr>
                        <tr className="normal">
                            <td>127.151</td>
                            <td className="text-align-right">.034</td>
                            <td className="text-align-right">757.260</td>
                        </tr>
                        <tr className="normal">
                            <td>126.842</td>
                            <td className="text-align-right">8.14</td>
                            <td className="text-align-right">507.780</td>
                        </tr>
                        <tr className="normal">
                            <td>126.830</td>
                            <td className="text-align-right">14</td>
                            <td className="text-align-right">922.321</td>
                        </tr>
                        <tr className="normal">
                            <td>126.821</td>
                            <td className="text-align-right">1.20</td>
                            <td className="text-align-right">182.973</td>
                        </tr>
                        <tr className="normal">
                            <td>126.788</td>
                            <td className="text-align-right">4.03</td>
                            <td className="text-align-right">632.236</td>
                        </tr>
                        <tr className="normal">
                            <td>126.762</td>
                            <td className="text-align-right">29</td>
                            <td className="text-align-right">111.246</td>
                        </tr>
                        <tr className="normal">
                            <td>126.754</td>
                            <td className="text-align-right">12.05</td>
                            <td className="text-align-right">89.901</td>
                        </tr>
                        <tr className="normal">
                            <td>126.748</td>
                            <td className="text-align-right">1.63</td>
                            <td className="text-align-right">220.128</td>
                        </tr>
                        <tr className="normal">
                            <td>126.745</td>
                            <td className="text-align-right">0.08</td>
                            <td className="text-align-right">458.236</td>
                        </tr>
                        <tr className="normal">
                            <td>126.741</td>
                            <td className="text-align-right">78.38</td>
                            <td className="text-align-right">180.378</td>
                        </tr>
                        <tr className="normal">
                            <td>126.739</td>
                            <td className="text-align-right">7</td>
                            <td className="text-align-right">22.391</td>
                        </tr>
                        <tr className="normal">
                            <td>126.735</td>
                            <td className="text-align-right">2.96</td>
                            <td className="text-align-right">47.231</td>
                        </tr>
                    </table>
                    <table className="orders-table">
                        <tr>
                            <th>Last Price</th>
                            <th className="text-align-right"></th>
                            <th className="text-align-right">$126.318</th>
                        </tr>
                        <tr className="success">
                            <td>126.729</td>
                            <td className="text-align-right">1.80</td>
                            <td className="text-align-right">203.164</td>
                        </tr>
                        <tr className="success">
                            <td>126.726</td>
                            <td className="text-align-right">4.21</td>
                            <td className="text-align-right">470.223</td>
                        </tr>
                        <tr className="success">
                            <td>126.722</td>
                            <td className="text-align-right">12.29</td>
                            <td className="text-align-right">1,434.118</td>
                        </tr>
                        <tr className="success">
                            <td>126.718</td>
                            <td className="text-align-right">20</td>
                            <td className="text-align-right">2,520.04</td>
                        </tr>
                        <tr className="success">
                            <td>126.711</td>
                            <td className="text-align-right">0.03</td>
                            <td className="text-align-right">3.951</td>
                        </tr>
                        <tr className="success">
                            <td>126.708</td>
                            <td className="text-align-right">8.14</td>
                            <td className="text-align-right">1,025.481</td>
                        </tr>
                        <tr className="success">
                            <td>126.35</td>
                            <td className="text-align-right">4.23</td>
                            <td className="text-align-right">505.339</td>
                        </tr>
                        <tr className="success">
                            <td>126.22</td>
                            <td className="text-align-right">2</td>
                            <td className="text-align-right">252.310</td>
                        </tr>
                        <tr className="success">
                            <td>126.10</td>
                            <td className="text-align-right">6.01</td>
                            <td className="text-align-right">757.260</td>
                        </tr>
                        <tr className="success">
                            <td>125.98</td>
                            <td className="text-align-right">4.03</td>
                            <td className="text-align-right">507.780</td>
                        </tr>
                        <tr className="success">
                            <td>125.87</td>
                            <td className="text-align-right">7.32</td>
                            <td className="text-align-right">922.321</td>
                        </tr>
                        <tr className="success">
                            <td>124.22</td>
                            <td className="text-align-right">1.45</td>
                            <td className="text-align-right">182.973</td>
                        </tr>
                        <tr className="success">
                            <td>121.10</td>
                            <td className="text-align-right">3.33</td>
                            <td className="text-align-right">419.586</td>
                        </tr>
                        <tr className="success">
                            <td>119.98</td>
                            <td className="text-align-right">12.77</td>
                            <td className="text-align-right">1,609.113</td>
                        </tr>
                        <tr className="success">
                            <td>114.87</td>
                            <td className="text-align-right">10.80</td>
                            <td className="text-align-right">1,360.301</td>
                        </tr>
                    </table>
                </CardBody>
            </Card>
        );
    }
}

export default OrdersTableCard;
