import React from "react";
import Loader from 'react-loader-spinner'

class Loading extends React.Component {
  render() {
    return (<div
      style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      zIndex: 20000,
      left: 0,
      top: 0,
      background: "rgba(10, 12, 38, 0.5)",
    }}>
      <Loader {...this.props} />
    </div>
    );
  };
}

export default Loading;