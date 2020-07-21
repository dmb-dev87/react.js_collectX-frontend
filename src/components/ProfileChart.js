import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ProfileChart extends React.Component {
    state = {
        dataBar: {
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [
                {
                    data: [4, 10, 4.5, 5, 4.8, 12, 13],
                    backgroundColor: [
                        "rgba(121, 83, 226, 1)",
                        "rgba(66, 221, 179, 1)",
                        "rgba(121, 83, 226, 1)",
                        "rgba(121, 83, 226, 1)",
                        "rgba(121, 83, 226, 1)",
                        "rgba(66, 221, 179, 1)",
                        "rgba(66, 221, 179, 1)",
                    ],
                    borderWidth: 0,
                    barThickness: 25,
                }
            ],
            
        },
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: true,
            layout: { 
                padding: { 
                    top: 5, 
                    bottom: 5,
                    left: 5, 
                    right: 5,
                }
            },            
            scales: {
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(255, 255, 255, 0.1)",
                            lineWidth: 3,
                            borderDash: [10], 
                            drawBorder: false
                        },
                        ticks: {
                            min: 0,
                            max: 15,
                            stepSize: 3,
                            callback: function(label, index, labels) {
                                return label + ' txs';
                            },
                            fontColor: "rgb(255,255,255)",
                            fontSize: 20, 
                            fontWeight: 800, 
                            padding: 15
                        }                        
                    }
                ],

                xAxes: [
                    {
                        gridLines: { 
                            display: false,
                            lineWidth: 0
                        }, 
                        ticks: {                            
                            fontColor: "rgb(255,255,255)",
                            fontSize: 20, 
                            fontWeight: 800, 
                            padding: 10
                        }    
                    }
                ]
            },

            legend: { 
                display: false
            }
        }
    }


    render() {
        return (
            <MDBContainer>
                <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
            </MDBContainer>
        );
    }
}

export default ProfileChart;