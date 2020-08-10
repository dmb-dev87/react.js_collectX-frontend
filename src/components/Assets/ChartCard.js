import React from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { Link } from "react-router-dom";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    Button,
} from "reactstrap";

const chartColor = '#FFFFFF';

const options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
    },
    responsive: 1,
    scales: {
        yAxes: [{
            display: 0,
            ticks: {
                display: false,
                beginAtZero: true,
                min: 300,
                max: 750    
            },
            gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
            }
        }],
        xAxes: [{
            display: 0,
            ticks: {
                display: false
            },
            gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
            }
        }]
    },
    layout: {
        padding: { left: 0, right: 0, top: 10, bottom: 0 }
    }
};

class ChartCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            con_data: '',
        }
    }

    componentWillMount() {
        const { data } = this.props;

        const con_data = (canvas) => {
            var ctx = canvas.getContext("2d");

            var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, chartColor);

            var gradientFill = ctx.createLinearGradient(69.44225, 460.13763, 0, 0);
            gradientFill.addColorStop(0, "rgba(121, 83, 226, 0)");
            gradientFill.addColorStop(1, "rgba(17, 17, 47, 1)");

            return {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Active Users",
                    borderColor: "#42DDB3",
                    borderShadow: "0px 3px 20px #42DDB3",
                    pointBorderColor: "#FFF",
                    pointBackgroundColor: "#FFF",
                    pointBorderWidth: 2,
                    pointHoverRadius: 12,                
                    pointHoverBorderWidth: 6,
                    pointRadius: 8,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 6,
                    data: data
                }]
            }
        };

        let draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line = Chart.controllers.line.extend({
            draw: function () {
                draw.apply(this, arguments);
                let ctx = this.chart.chart.ctx;
                let _stroke = ctx.stroke;
                ctx.stroke = function () {
                    ctx.save();
                    ctx.shadowColor = '#42ffb3';
                    ctx.shadowBlur = 35;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 0;
                    _stroke.apply(this, arguments)
                    ctx.restore();
                }
            }
        });

        this.setState({ con_data });
    }

    changeModalType = (flag) => {
        const { changeModalType } = this.props;
        changeModalType(flag);
    }

    render() {

        const { con_data } = this.state;
        const { type } = this.props;

        return (
            <Card className="card-plain card-chart">
                <CardHeader className="card-chart-header">
                    <Row>
                        <Col>
                            <CardTitle tag="h1" className="card-chart-title-left">Price History</CardTitle>
                        </Col>
                        <Col>
                            <h1 className="card-chart-title-right font-color-line">+2.48%</h1>
                            <h1 className="card-chart-title-right font-color-wight">08.28.20</h1>
                            <h1 className="card-chart-title-right font-color-darkGray">CollectX</h1>
                        </Col>
                    </Row>
                    <Row>
                        <h1 className="card-chart-title-right font-color-market">Market Cap</h1>
                    </Row>
                    <Row>
                        <h1 className="card-chart-title-right font-color-price">$126,318.49</h1>
                    </Row>
                </CardHeader>
                <CardBody className="card-body-no-padding chart-custom-background">
                    <Line data={con_data} options={options} width={100} height={100} />
                    {
                        type ? <>
                            <Button className="btn-karma-type1" onClick={() => this.changeModalType('1')}>Instant Buy</Button>
                            <Button className="btn-karma-type2" onClick={() => this.changeModalType('2')}>Instant Sell</Button>
                            <div className="btn-karma-type3-bg"><div className="btn-karma-type3">
                                <Link className="btn-karma-type3" to="/MJRTrade">Live market</Link></div></div>
                        </> :<Link to="/spot-wallet"> <Button className="btn-karma-type4">1.39 MJR</Button></Link>
                    }
                </CardBody>
            </Card>
        );
    }
}

export default ChartCard;
