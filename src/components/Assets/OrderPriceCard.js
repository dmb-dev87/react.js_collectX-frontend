/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// reactstrap components
import {
  Row,
  Card,
  CardHeader,
  CardBody,
  Col,
  Button,
} from "reactstrap";

function valuetext(value) {
  return `${value}%`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

const marks = [  
  {
    value: 0,
    label: '0%',
  },
  {
    value: 25,
    label: '25%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 75,
    label: '75%',
  },
  {
    value: 100,
    label: '100%',
  },
];

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
          <Row>
            <Col lg="6" md="12" sm="12">
              <Row>
                <Col className="col-6"><h5 className="title">Buy MMR</h5></Col>
                <Col className="col-6"><h6 className="align-right">$1,2584.15</h6></Col>
              </Row>
              { this.state.orderprice ?
                <Row>
                  <Col className="col-3"><h6>Price: </h6></Col>
                  <Col className="col-9">
                    <div className="mmr-input">
                      <input type="text" />MMR
                    </div>
                  </Col>
                </Row>
                : null
              }
              <Row>
                <Col className="col-3"><h6>Amount: </h6></Col>
                <Col className="col-9">
                  <div className="mmr-input">
                    <input type="text" />USD
                  </div>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col className="col-9">
                  <Slider
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                  />
                  {/* <div className="slidecontainer">
                    <input class="slider" type="range" min="1" max="100" id="myRange" onInput={() => this.onInput()}/>
                  </div> */}
                </Col>
              </Row>
              <Row>
                <Col className="col-3"><h6>Total: </h6></Col>
                <Col className="col-9">
                  <div className="mmr-input">
                    <input type="text" />USD
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="col-3"></Col>
                <Col className="col-9">
                  <Button className="btn-order-price-buy">Buy</Button>
                </Col>
              </Row>
            </Col>
            <Col lg="6" md="12" sm="12">
              <Row>
                <Col className="col-6"><h5 className="title">Sell MMR</h5></Col>
                <Col className="col-6"><h6 className="align-right">64 MMR</h6></Col>
              </Row>
              {this.state.orderprice?
                <Row>
                  <Col className="col-3"><h6>Price: </h6></Col>
                  <Col className="col-9">
                    <div className="mmr-input">
                      <input type="text" />MMR
                    </div>
                  </Col>
                </Row>
                : null
              }
              <Row>
                <Col className="col-3"><h6>Amount: </h6></Col>
                <Col className="col-9">
                  <div className="mmr-input">
                    <input type="text" />USD
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="col-3"></Col>
                <Col className="col-9">
                  
                  <Slider
                      defaultValue={20}
                      getAriaValueText={valuetext}
                      aria-labelledby="discrete-slider-custom"
                      step={10}
                      valueLabelDisplay="auto"
                      marks={marks}
                    />
                </Col>
              </Row>
              <Row>
                <Col className="col-3"><h6>Total: </h6></Col>
                <Col className="col-9">
                  <div className="mmr-input">
                    <input type="text" />MMR
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="col-3"></Col>
                <Col className="col-9">
                  <Button className="btn-order-price-sell">Sell</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default OrderPriceCard;
