
import React from "react";
import { Card, CardBody, Button, CardHeader, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";


export default class StampCardStyle1 extends React.Component {
    render() {
        const { image, title, content, percent, type, detail } = this.props;
        return (
            <Card className="stamp-card style-1 text-center">
                <CardHeader>  
                    <div> {type}
                    { percent < 0 ? 
                        <span className="negotive">{percent}%<div></div></span>: 
                        <span className="positive">+{percent}%<div></div></span> 
                    }
                    </div> 
                </CardHeader>
                <CardBody className="justify-content-center">
                    <img alt="..." src={image} />
                </CardBody>
                <CardFooter>
                    <div className="description">
                        <h2>{content}</h2>
                        <h2>{title}</h2>
                    </div>
                    <Link to="/MJRTrade">
                        <Button className="buy">Buy</Button>
                    </Link>
                    <Link to="/assets/detail">
                        <Button className="detail"> 
                            {   
                                detail ? <> {detail} </> : "Detail"
                            }
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        );
    }
}

export class StampCardStyle2 extends React.Component {
    render() {
        const { image, title, content, percent, type, selected } = this.props;
        return (
            <Card className={selected == 0 ? 'stamp-card style-2 text-center selected' : 'stamp-card style-2 text-center unselected'}>
                <CardHeader>  
                    <div> {type}
                    { percent < 0 ? 
                        <span className="negotive">{percent}%<div></div></span>: 
                        <span className="positive">+{percent}%<div></div></span> 
                    }
                    </div> 
                </CardHeader>
                <CardBody className="justify-content-center">
                    <img alt="..." src={image} />
                </CardBody>
                <CardFooter>
                    <div className="description">
                        <h2>{content}</h2>
                        <h2>{title}</h2>
                    </div>
                    <Link to="/MJRTrade">
                        <Button className="buy">Buy</Button>
                    </Link>
                    <Link to="/assets/detail">
                        <Button className="price">{percent} {type}</Button>
                    </Link>
                </CardFooter>
            </Card>
        );
    }
}

