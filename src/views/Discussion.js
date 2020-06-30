import React from "react";
import {connect} from 'react-redux';
// nodejs library that concatenates classes
import {startGetTopics} from "../actions/discussion";
import Loading from "../components/Utils/Loader";
import TopicList from "../components/Discussion/TopicList";
import ChatPanel from "../components/Discussion/ChatPanel";
import CreateIdea from "../components/Discussion/CreateIdea";

// reactstrap components
import {
  Row,
  Col,
} from "reactstrap";

// core components

var topic_content;

class Discussion extends React.Component {
  constructor(props) {
    super(props);
    this.props.startGetTopics();
    this.state = {
      topics: [],
      topic_id: -1,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      topics: nextProps.topics,
    })
  }

  componentWillMount() {
  }

  toggleTopic = (_id) => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ topic_id: _id });
  };

  render() {
    return (      
      <>
        <div className={this.props.fluid ? "content-fluid discussion" : "content discussion"}>
          { 
            this.props.isTopicsLoading && <Loading type="Oval" color="#00BFFF" height="80" width="80" />
          }
          <Row>
            <Col lg="12" xl="4" id="list-panel">
              <TopicList title="Community Topics" topics={this.state.topics} topic_id={this.state.topic_id} toggleTopic={this.toggleTopic} ></TopicList>
            </Col>
            <Col lg="12" xl="8" id="content-panel"> 
              {
                this.state.topic_id == -1 ? (
                  <CreateIdea />
                ) : (
                  <ChatPanel activeTopic={this.state.topics[this.state.topic_id-1]} />
                )
              }
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.discussion.topics,
    isTopicsLoading: state.discussion.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  startGetTopics: () => dispatch(startGetTopics()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discussion);