import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const Dashboard = ({ auth: { user } }) => {
  return user === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Mis expedientes</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Bienvenido {user && user.name}{' '}
      </p>
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Dashboard));
