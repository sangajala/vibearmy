import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchVideos } from '../../actions';

class VideoList extends React.Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  renderAdmin(video) {
    if (video.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/videos/edit/${video.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/videos/delete/${video.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.videos.map(video => {
      return (
        <div className="item" key={video.id}>
          {this.renderAdmin(video)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/videos/${video.id}`} className="header">
              {video.title}
            </Link>
            <div className="description">{video.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/videos/new" className="ui button primary">
            Create Video
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Videos</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: Object.values(state.videos),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchVideos }
)(VideoList);
