import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} style={{backgroundColor:'white',border:0,color:'#4183c4'}}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
