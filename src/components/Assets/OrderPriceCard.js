/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";
import Slider from 'rc-slider'

// reactstrap components
import {
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Col,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";

class OrderPriceCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      orderprice: false,
    }

    this.onOrderPrice = this.onOrderPrice.bind(this);
  }
  
  onOrderPrice = () => {
    this.setState({orderprice: !this.state.orderprice});
  }

  onInput = () => {
    console.log("aaaaa");
  }

  render() {
    return (
      <Card className="card-plain order-price-card">
        <CardHeader >
          <div class="can-toggle">
            <input id="a" type="checkbox" onClick={this.onOrderPrice}/>
            <label for="a">
              <div class="can-toggle__switch" data-checked="Choose Price" data-unchecked="Market Order"></div>
            </label>
          </div>
        </CardHeader>
        <CardBody className="content">
          <table>
            <tr>
              <td><h5 className="title">Buy MMR</h5></td>
              <td ><h6 className="align-right">$1,2584.15</h6></td>
            </tr>
            { this.state.orderprice ?
              <tr>
                <td><h6>Price: </h6></td>
                <td >
                  <div className="mmr-input">
                    <input type="text" />MMR
                  </div>
                </td>
              </tr>
              : null
            }
            <tr>
              <td><h6>Amount: </h6></td>
              <td >
                <div className="mmr-input">
                  <input type="text" />USD
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td >
                <div className="slidecontainer">
                  <input class="slider" type="range" min="1" max="100" id="myRange" onInput={() => this.onInput()}/>
                </div>
              </td>
            </tr>
            <tr>
              <td><h6>Total: </h6></td>
              <td >
                <div className="mmr-input">
                  <input type="text" />USD
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td >
                <Button className="btn-order-price-buy">Buy</Button>
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td><h5 className="title">Sell MMR</h5></td>
              <td ><h6 className="align-right">64 MMR</h6></td>
            </tr>
            {this.state.orderprice?
              <tr>
                <td><h6>Price: </h6></td>
                <td >
                  <div className="mmr-input">
                    <input type="text" />MMR
                  </div>
                </td>
              </tr>
              : null
            }
            <tr>
              <td><h6>Amount: </h6></td>
              <td >
                <div className="mmr-input">
                  <input type="text" />USD
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td >
                <div className="slidecontainer">
                  <input type="range" min="1" max="100" class="slider" id="myRange" />
                </div>
              </td>
            </tr>
            <tr>
              <td><h6>Total: </h6></td>
              <td >
                <div className="mmr-input">
                  <input type="text" />MMR
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td >
                <Button className="btn-order-price-sell">Sell</Button>
              </td>
            </tr>
          </table>
        </CardBody>
      </Card>
    );
  }
}

export default OrderPriceCard;
