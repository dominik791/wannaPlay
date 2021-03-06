/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../selectors/users';
import NavUser from '../components/NavUser/NavUser.component';

type Props = {
  currentUser: User
}

class NavUserContainer extends Component {

  props: Props;

  constructor() {
    super();
  }

  render() {
    return (
      this.props.currentUser.loggedIn ?
        <NavUser imgUrl={this.props.currentUser.imgUrl}
                 name={this.props.currentUser.first_name}
                 surname={this.props.currentUser.last_name}/> :
        <span></span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: getCurrentUser(state)
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(NavUserContainer);
