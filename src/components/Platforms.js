import React from 'react';
import { connect } from 'react-redux';
import { twitchValidateOauth, twitchGetUserToken } from '../actions/twitchApi';

function Platforms(props) {
  return (
    <div>
      <button
        onClick={() => props.twitchGetUserToken()}
      >
        Twitch
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    twitchGetUserToken: () => dispatch(twitchGetUserToken()),
    twitchValidateOauth: () => dispatch(twitchValidateOauth())
  }
}

export default connect(null, mapDispatchToProps)(Platforms)