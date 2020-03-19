import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const CanonItem = ({
  auth,
  canon: { year, total, status, file, _id, dateRequest, canonTicket },
  showActions
}) => {
  return (
    <Fragment>
      <div className='post bg-white p-1 my-1'>
        <div>
          {showActions && (
            <Fragment>
              <Link
                to={`/canon-description/${_id}`}
                className='btn btn-primary'
              >
                Consultar solicitud
              </Link>
            </Fragment>
          )}
        </div>
        <div>
          <p className='my-1'>
            <b>Propiedad:</b> {file.name} <br />
            <b>Expediente:</b> {file.header} <br />
            <b>Total a abonar:</b> ${total} <br />
            <b>Fecha de Solicitud:</b> <Moment>{dateRequest}</Moment> <br />
            {status === 'Desaprobado' ? (
              <Fragment>
                <b className='text-red'>Estado de solicitud: {status} </b>
                <br />
              </Fragment>
            ) : status === 'Aprobado' ? (
              <Fragment>
                <b className='text-blue'>Estado de solicitud: {status} </b>
                <br />
              </Fragment>
            ) : (
              status === 'Abonado' && (
                <Fragment>
                  <b className='text-green'>Estado de solicitud: {status} </b>
                  <br />
                </Fragment>
              )
            )}
            {canonTicket.length === 0 && (
              <Fragment>
                <b className='text-red'>Solicitud sin abonar. </b>
                <br />
              </Fragment>
            )}
            {canonTicket.length !== 0 &&
              (canonTicket[0].status === 'Solicitado' ? (
                <Fragment>
                  <b className='text-blue'>Informe de pago solicitado. </b>
                  <br />
                </Fragment>
              ) : canonTicket[0].status === 'Desaprobado' ? (
                <Fragment>
                  <b className='text-red'>Informe de pago desaprobado. </b>
                  <br />
                </Fragment>
              ) : (
                canonTicket[0].status === 'Aprobado' && (
                  <Fragment>
                    <b className='text-green'>Informe de pago aprobado. </b>
                    <br />
                  </Fragment>
                )
              ))}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

CanonItem.defaultProps = {
  showActions: true
};

CanonItem.propTypes = {
  canon: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(CanonItem));
