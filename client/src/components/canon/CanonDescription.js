import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import {
  getCanon,
  deleteCanonRequest,
  approveCanonRequest,
  disapproveCanonRequest,
  approveCanonTicket,
  disapproveCanonTicket,
  paymentReport
} from '../../actions/canon';
const convertir = require('numero-a-letras');

const CanonDescription = ({
  getCanon,
  deleteCanonRequest,
  approveCanonRequest,
  disapproveCanonRequest,
  disapproveCanonTicket,
  approveCanonTicket,
  paymentReport,
  canon: { canon, loading },
  match,
  history
}) => {
  useEffect(() => {
    getCanon(match.params.id);
  }, [getCanon, match]);

  const [formData, setFormData] = useState({
    comment: '',
    dateDisapprove: '',
    transaction: '',
    datePayment: '',
    payment: ''
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const {
    comment,
    dateDisapprove,
    transaction,
    datePayment,
    payment
  } = formData;

  const textAmount = () => {
    let texto = convertir.NumerosALetras(canon.total);
    let textoResult = [];
    textoResult.push(
      <p key={texto}>
        <i>
          ${canon.total} - {texto}
        </i>
      </p>
    );
    return textoResult;
  };

  const createDescription = () => {
    let createdDescription = [];
    canon.description.sort((a, b) => (a.code > b.code ? 1 : -1));
    canon.description.map(description => {
      createdDescription.push(
        <li key={description.code}>
          Periodo 0{description.period} del año {description.year}, por el monto
          de $ {description.amount}, y multa de ${description.tax}{' '}
        </li>
      );
    });
    return createdDescription;
  };

  return loading || canon === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Solicitud de Liquidación de Canon</h1>
      <div className='post bg-white p-1 my-1'>
        <div></div>
        <div>
          <p className='my-1'>
            Propiedad: {canon.file.name} <br />
            Iniciador/Consesionario: {canon.file.initiator} <br />
            Tipo de propiedad: {canon.file.kind} <br />
            Pertenencias: {canon.file.unity} HAS. <br />
            Fecha de solicitud: {canon.dateRequest} <br />
            Liquidacón de canon solicitada por: {canon.user.name}
            <br />
            <br />
          </p>
          <hr />
          <p>
            <br />
            <b>Descripción de solicitud de pago: </b>
            <br />
            {createDescription()}
          </p>
          <br />
          <hr />
          <br />
          <b>Monto total a abonar: {textAmount()}</b>
          <br />
          <hr />
          {canon.status === 'Solicitado' ? (
            <Fragment>
              <br />
              <input
                type='text'
                name='dateDisapprove'
                value={dateDisapprove}
                onChange={e => onChange(e)}
              />
              <br />
              <b>Observaciones:</b>
              <br />
              <textarea
                name='comment'
                cols='60'
                rows='10'
                value={comment}
                placeholder=''
                onChange={e => onChange(e)}
              ></textarea>
              <br />
              <Link
                to={`/canon-description`}
                className='btn btn-success'
                onClick={e =>
                  approveCanonRequest(
                    canon._id,
                    history,
                    canon.file._id,
                    formData
                  )
                }
              >
                Aprobar Solicitud
              </Link>
              <Link
                to={`/canon-description`}
                className='btn btn-primary'
                onClick={e =>
                  disapproveCanonRequest(
                    canon._id,
                    history,
                    canon.file._id,
                    formData
                  )
                }
              >
                Desaprobar Solicitud
              </Link>
              <Link
                to={`/canon-description`}
                className='btn btn-danger'
                onClick={e =>
                  deleteCanonRequest(canon._id, history, canon.file._id)
                }
              >
                Cancelar Solicitud
              </Link>
              <Link
                to={`/canon-requests/${canon.file._id}`}
                className='btn btn-light'
              >
                Regresar
              </Link>
            </Fragment>
          ) : canon.status === 'Desaprobado' ? (
            <Fragment>
              <p className='danger-color-p'>
                <b>Solicitud de liquidación de Canon Minero desaprobado</b>
                <br />
              </p>
              <br />
              <hr />
              <br />
              <a
                className='btn btn-primary'
                href={
                  process.env.PUBLIC_URL +
                  `/solicitudes-canon-desaprobadas/${canon.file._id}/${canon._id}.pdf`
                }
                target='_blank'
              >
                <i className='fas fa-file-pdf'></i> Consultar solicitud
              </a>
              <Link
                to={`/canon-requests/${canon.file._id}`}
                className='btn btn-light'
              >
                Regresar
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <br />
              <p>
                <b className='success-color-p'>
                  Solicitud de liquidación de Canon Minero aprobado
                </b>
                <br />
              </p>
              <br />
              <hr />
              <br />
              {canon.canonTicket.length === 0 ? (
                <Fragment>
                  <b>Informar pago</b>
                  <br />
                  <br />
                  <label htmlFor='transaction'>Nº de transacción:</label>
                  <br />
                  <input
                    type='text'
                    placeholder='0001234'
                    name='transaction'
                    value={transaction}
                    onChange={e => onChange(e)}
                  />
                  <br />
                  <label htmlFor='datePayment'>Fecha y hora:</label>
                  <br />
                  <input
                    type='text'
                    placeholder='AAAA/MM/DD HH:MM:SS'
                    name='datePayment'
                    value={datePayment}
                    onChange={e => onChange(e)}
                  />
                  <br />
                  <label htmlFor='payment'>Monto abonado:</label>
                  <br />
                  <input
                    type='number'
                    placeholder='5000'
                    name='payment'
                    value={payment}
                    onChange={e => onChange(e)}
                  />
                  <br />
                  <br />
                  <Link
                    to='#'
                    className='btn btn-success'
                    onClick={e =>
                      paymentReport(
                        canon._id,
                        formData,
                        history,
                        canon.file._id
                      )
                    }
                  >
                    Informar pago
                  </Link>
                  <br />
                  <br />
                </Fragment>
              ) : canon.canonTicket[0].status === 'Solicitado' ? (
                <Fragment>
                  <b>Informe de pago</b>
                  <br />
                  <br />
                  <b>
                    <label htmlFor='transaction'>Nº de transacción:</label>
                  </b>
                  <br />
                  <p>{canon.canonTicket[0].transaction}</p>
                  <b>
                    <label htmlFor='datePayment'>Fecha y hora:</label>
                  </b>
                  <p>
                    {' '}
                    <Moment format='YYYY-MM-DD HH:mm:ss'>
                      {canon.canonTicket[0].datePayment}
                    </Moment>
                  </p>
                  <b>
                    <label htmlFor='payment'>Monto abonado:</label>
                  </b>
                  <p>${canon.canonTicket[0].payment}</p>
                  <b>
                    <label htmlFor='payment'>
                      Informe de pago realizado por:
                    </label>
                  </b>
                  <p>{canon.canonTicket[0].user.name}</p>
                  <br />
                  <Link
                    to='#'
                    className='btn btn-success'
                    onClick={e =>
                      approveCanonTicket(
                        canon.canonTicket[0]._id,
                        canon.file._id,
                        history
                      )
                    }
                  >
                    Confirmar informe de pago
                  </Link>
                  <Link
                    to='#'
                    onClick={e =>
                      disapproveCanonTicket(
                        canon.canonTicket[0]._id,
                        canon.file._id,
                        history
                      )
                    }
                    className='btn btn-danger'
                  >
                    Denegar informe de pago
                  </Link>
                  <br />
                  <br />
                </Fragment>
              ) : canon.canonTicket[0].status === 'Desaprobado' ? (
                <Fragment>
                  <b>Nuevo informe de pago</b>
                  <br />
                  <p className='text-red'>
                    Su pago anterior ha sido rechazado.
                  </p>
                  <br />
                  <label htmlFor='transaction'>Nº de transacción:</label>
                  <br />
                  <input
                    type='text'
                    placeholder='0001234'
                    name='transaction'
                    value={transaction}
                    onChange={e => onChange(e)}
                  />
                  <br />
                  <label htmlFor='datePayment'>Fecha y hora:</label>
                  <br />
                  <input
                    type='text'
                    placeholder='AAAA/MM/DD HH:MM:SS'
                    name='datePayment'
                    value={datePayment}
                    onChange={e => onChange(e)}
                  />
                  <br />
                  <label htmlFor='payment'>Monto abonado:</label>
                  <br />
                  <input
                    type='number'
                    placeholder='5000'
                    name='payment'
                    value={payment}
                    onChange={e => onChange(e)}
                  />
                  <br />
                  <br />
                  <Link
                    to='#'
                    className='btn btn-success'
                    onClick={e =>
                      paymentReport(
                        canon._id,
                        formData,
                        history,
                        canon.file._id
                      )
                    }
                  >
                    Informar pago
                  </Link>
                  <br />
                  <br />
                </Fragment>
              ) : (
                canon.canonTicket[0].status === 'Aprobado' && (
                  <Fragment>
                    <b>Informe de pago</b>
                    <br />
                    <b>
                      <p className='text-green'>
                        Comprobante de pago aprobado.
                      </p>
                    </b>
                    <b>
                      <label htmlFor='transaction'>Nº de transacción:</label>
                    </b>
                    <br />
                    <p>{canon.canonTicket[0].transaction}</p>
                    <b>
                      <label htmlFor='datePayment'>Fecha y hora:</label>
                    </b>
                    <p>
                      {' '}
                      <Moment format='YYYY-MM-DD HH:mm:ss'>
                        {canon.canonTicket[0].datePayment}
                      </Moment>
                    </p>
                    <b>
                      <label htmlFor='payment'>Monto abonado:</label>
                    </b>
                    <p>${canon.canonTicket[0].payment}</p>
                    <b>
                      <label htmlFor='payment'>
                        Informe de pago realizado por:
                      </label>
                    </b>
                    <p>{canon.canonTicket[0].user.name}</p>
                    <br />
                    <a
                      className='btn btn-primary'
                      href={
                        process.env.PUBLIC_URL +
                        `/canon-comprobantes-pago/${canon.file._id}/${canon._id}.pdf`
                      }
                      target='_blank'
                    >
                      <i className='fas fa-file-pdf'></i> Descargar comprobante
                      de pago
                    </a>
                    <br />
                    <br />
                  </Fragment>
                )
              )}
              <hr />
              <br />
              <a
                className='btn btn-primary'
                href={
                  process.env.PUBLIC_URL +
                  `/solicitudes-canon-aprobadas/${canon.file._id}/${canon._id}.pdf`
                }
                target='_blank'
              >
                <i className='fas fa-file-pdf'></i> Descargar Boleta de Pago
              </a>
              <Link
                to={`/canon-requests/${canon.file._id}`}
                className='btn btn-light'
              >
                Regresar
              </Link>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

CanonDescription.propTypes = {
  getCanon: PropTypes.func.isRequired,
  deleteCanonRequest: PropTypes.func.isRequired,
  approveCanonRequest: PropTypes.func.isRequired,
  disapproveCanonRequest: PropTypes.func.isRequired,
  disapproveCanonTicket: PropTypes.func.isRequired,
  approveCanonTicket: PropTypes.func.isRequired,
  paymentReport: PropTypes.func.isRequired,
  canon: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  canon: state.canon
});

export default connect(mapStateToProps, {
  getCanon,
  deleteCanonRequest,
  approveCanonRequest,
  disapproveCanonRequest,
  disapproveCanonTicket,
  approveCanonTicket,
  paymentReport
})(withRouter(CanonDescription));
