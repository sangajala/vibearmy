import React from 'react';
import { connect } from 'react-redux';
import { createVideo } from '../../actions';
import VideoForm from './VideoForm';

class VideoCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createVideo(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Video</h3>
        <VideoForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createVideo }
)(VideoCreate);
