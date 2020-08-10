/*eslint-disable*/
import React from "react";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

// reactstrap components
import {
    Card,
} from "reactstrap";

class MJRChartCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { image, title, name, content } = this.props;
        return (
            <Card className="card-plain mjr-chart-card">
                <TradingViewWidget
                    symbol="NASDAQ:AAPL"
                    theme={Themes.DARK}
                    locale="fr"
                    autosize
                />
            </Card>
        );
    }
}

export default MJRChartCard;
