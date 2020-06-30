/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components

class CreateIdea extends React.Component {
  render() {
    return (
      <div className="create-topic">
        <div className="description">
          <h1>Want To Create A Thread?</h1>
          <h2>Submit your idea for a new topic!</h2>
          <button className="btn-submit">Submit Idea</button>
        </div>        
      </div>
    );
  }
}

export default CreateIdea;
