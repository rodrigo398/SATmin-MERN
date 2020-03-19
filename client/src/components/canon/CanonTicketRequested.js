import React, { Fragment, useEffect } from 'react';
import Pagination from 'pagination-react-hooks';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import CanonItem from './CanonItem';
import { getTicketsRequested } from '../../actions/requests';

const CanonTicketRequested = ({
  getTicketsRequested,
  canon: { ticketsRequested, loading }
}) => {
  useEffect(() => {
    getTicketsRequested();
  }, [getTicketsRequested]);

  const show = value => <CanonItem key={value._id} canon={value}></CanonItem>;

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Solicitudes de aprobación de pago</h1>
      <Fragment>
        <div className='post bg-white p-1 my-1'>
          <div>
            <Link to={`/dashboard`} className='btn btn-primary'>
              Regresar al inicio
            </Link>
          </div>
          <div>
            <p className='my-1'></p>
          </div>
        </div>
      </Fragment>
      <Pagination
        data={ticketsRequested}
        Show={show}
        displayNumber='5'
        previousText='Anterior'
        nextText='Siguiente'
      />
    </Fragment>
  );
};

CanonTicketRequested.propTypes = {
  getTicketsRequested: PropTypes.func.isRequired,
  canon: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  canon: state.canon
});

export default connect(mapStateToProps, { getTicketsRequested })(
  withRouter(CanonTicketRequested)
);
