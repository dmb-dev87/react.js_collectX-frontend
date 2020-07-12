import React from 'react';
import { Line, Chart } from 'react-chartjs-2';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
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
        display: false
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
    padding: { left: 0, right: 0, top: 15, bottom: 0 }
  }
};

class HomeChartCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      con_data : '',
    }
  }

  componentWillMount() {
    const { data } = this.props;    
    
    const con_data = (canvas) => {
      var ctx = canvas.getContext("2d");
      
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, '#80b6f4');
      gradientStroke.addColorStop(1, chartColor);

      var gradientFill = ctx.createLinearGradient(89.44225, 460.13763, 0 , 0);
      gradientFill.addColorStop(0, "rgba(121, 83, 226, 0)");
      gradientFill.addColorStop(1, "rgba(17, 17, 47, 1)");
      return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#42DDB3",
          borderShadow: "0px 3px 20px #42DDB3",
          pointBorderColor: "#00000000",
          pointBackgroundColor: "#00000000",
          pointBorderWidth: 2,
          pointHoverRadius: 0,
          pointHoverBorderWidth: 0,
          pointRadius: 0,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 7,
          data: data
        }]
      }
    };

    let draw = Chart.controllers.line.prototype.draw;
    Chart.controllers.line = Chart.controllers.line.extend({
      draw: function() {
        draw.apply(this, arguments);
        let ctx = this.chart.chart.ctx;
        let _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#42DDB3';
            ctx.shadowBlur = 15;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
      }
    });

    this.setState({con_data});
  }

  render(){

    const { con_data } = this.state;
    const { type } = this.props;

    return(
      <Card className="card-plain home-card-chart">
        <img src={ require("assets/img/collectx.svg") } /> 
        <p className="logo-text">Collectx</p>
        <p className="logo-price">+6.35%</p>
        <CardHeader className="card-chart-header">
          <Row>
            <h1 className="card-chart-title-right font-color-market">Inventory Market Cap</h1>
          </Row>
          <Row>
            <h1 className="card-chart-title-right font-color-price">$126,318.49</h1>
          </Row>
        </CardHeader>
        <CardBody className="card-body-no-padding">
          <Line data={con_data} options={options} />
        </CardBody>
      </Card>
    );
  }
}

export default HomeChartCard;
