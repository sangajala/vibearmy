import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchVideo, deleteVideo } from '../../actions';

class VideoDelete extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteVideo(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.video) {
      return 'Are you sure you want to delete this video?';
    }

    return `Are you sure you want to delete the video with title: ${
      this.props.video.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Video"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { video: state.videos[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchVideo, deleteVideo }
)(VideoDelete);
