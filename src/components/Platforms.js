import React from 'react';
import { connect } from 'react-redux';
import { twitchOauth } from '../actions/twitchOauth';
import { twitchValidateOauth } from '../actions/twitchValidateOauth';

function Platforms(props) {
  return (
    <div>
      <button
        onClick={() => props.twitchValidateOauth()}
      >
        Twitch
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    twitchOauth: () => dispatch(twitchOauth()),
    twitchValidateOauth: () => dispatch(twitchValidateOauth())
  }
}

export default connect(null, mapDispatchToProps)(Platforms)