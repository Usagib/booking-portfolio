import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  renderRedirect() {
    const { cookies } = this.props;
    if ( cookies.get('authToken') === 'null') {
      return <Redirect to='/login' />
    }
    else {
      cookies.set('id', null, { path: '/'});
      cookies.set('authToken', null, { path: '/'});
      console.log(cookies.get('authToken'));
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
});

export default connect(mapStateToProps, null)(Logout);
