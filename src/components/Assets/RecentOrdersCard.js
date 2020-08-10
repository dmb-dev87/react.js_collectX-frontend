/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
} from "reactstrap";

class RecentOrders extends React.Component {
    render() {
        const { image, title, name, content } = this.props;
        return (
            <Card className="card-plain recent-orders-card">
                <CardHeader >
                    <h3>Recent Orders</h3>
                </CardHeader>
                <CardBody>
                    <table className="orders-table">
                        <tr>
                            <th>Price(USD)</th>
                            <th className="text-align-right">Amount</th>
                            <th className="text-align-right">TOTAL</th>
                        </tr>
                        <tr className="success">
                            <td>26.729</td>
                            <td className="text-align-right">1.6</td>
                            <td className="text-align-right">29.34</td>
                        </tr>
                        <tr className="normal">
                            <td>26.71</td>
                            <td className="text-align-right">0.65</td>
                            <td className="text-align-right">16.37</td>
                        </tr>
                        <tr className="success">
                            <td>26.722</td>
                            <td className="text-align-right">0.023</td>
                            <td className="text-align-right">1.63</td>
                        </tr>
                        <tr className="success">
                            <td>26.718</td>
                            <td className="text-align-right">14</td>
                            <td className="text-align-right">421.11</td>
                        </tr>
                        <tr className="normal">
                            <td>26.711</td>
                            <td className="text-align-right">119</td>
                            <td className="text-align-right">2,903.36</td>
                        </tr>
                        <tr className="normal">
                            <td>26.708</td>
                            <td className="text-align-right">3.16</td>
                            <td className="text-align-right">74.62</td>
                        </tr>
                        <tr className="normal">
                            <td>26.629</td>
                            <td className="text-align-right">73.27</td>
                            <td className="text-align-right">1,688.41</td>
                        </tr>
                        <tr className="success">
                            <td>26.729</td>
                            <td className="text-align-right">12</td>
                            <td className="text-align-right">367.30</td>
                        </tr>
                        <tr className="success">
                            <td>26.726</td>
                            <td className="text-align-right">76.32</td>
                            <td className="text-align-right">1,473.66</td>
                        </tr>
                        <tr className="normal">
                            <td>26.722</td>
                            <td className="text-align-right">2.33</td>
                            <td className="text-align-right">51.94</td>
                        </tr>
                        <tr className="success">
                            <td>26.718</td>
                            <td className="text-align-right">1.61</td>
                            <td className="text-align-right">42.36</td>
                        </tr>
                        <tr className="normal">
                            <td>26.711</td>
                            <td className="text-align-right">27</td>
                            <td className="text-align-right">458.236</td>
                        </tr>
                    </table>
                </CardBody>
            </Card>
        );
    }
}

export default RecentOrders;
