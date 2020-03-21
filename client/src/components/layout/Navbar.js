import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getCanonRequested, getTicketsRequested } from '../../actions/requests';

const Navbar = ({
  auth: { isAuthenticated, loading },
  logout,
  getCanonRequested,
  getTicketsRequested,
  canon: { canons },
  requests: { canonsRequested, ticketsRequested }
}) => {
  useEffect(() => {
    getCanonRequested();
  }, [canons]);

  useEffect(() => {
    getTicketsRequested();
  }, [getTicketsRequested]);

  /* const totalRequested = canons.reduce(
    (total, canon) => (canon.status === 'Solicitado' ? total + 1 : total),
    0
  ); */

  const authLinks = (
    <ul>
      <li>
        <Link to="/files">
          <i className="fas fa-file"></i>{' '}
          <span className="hide-sm"> Expedientes </span>
        </Link>
      </li>
      <li>
        <a href="/canon-ticket-requested">
          <i className="fas fa-file-invoice-dollar"></i>{' '}
          <span className="hide-sm"> Informes </span>
          {ticketsRequested.length}
        </a>
      </li>
      <li>
        <a href="/canon-requested">
          <i className="fas fa-clipboard-check"></i>{' '}
          <span className="hide-sm"> Solicitudes </span>
          {canonsRequested.length}
        </a>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{' '}
          <span className="hide-sm">Cerrar Sesiòn</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <a href="#!">Developers</a>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="http://www.mineria.catamarca.gov.ar/">
          <i className="fas fa-code"></i> Ministerio de Minería
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCanonRequested: PropTypes.func.isRequired,
  requests: PropTypes.object.isRequired,
  canon: PropTypes.object.isRequired,
  getTicketsRequested: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  requests: state.requests,
  canon: state.canon
});

export default connect(mapStateToProps, {
  logout,
  getCanonRequested,
  getTicketsRequested
})(withRouter(Navbar));
