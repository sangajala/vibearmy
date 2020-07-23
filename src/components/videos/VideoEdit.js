import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchVideo, editVideo} from '../../actions';
import VideoForm from './VideoForm';

class VideoEdit extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.onSubmit(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a Video</h3>
        <VideoForm
          initialValues={_.pick(this.props.video, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { video: state.videos[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchVideo, editVideo }
)(VideoEdit);
