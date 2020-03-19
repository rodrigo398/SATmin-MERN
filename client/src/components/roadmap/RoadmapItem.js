import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import {
  deleteRoadmapRequest,
  approveRoadmapRequest,
  generateRoadmapRequest,
  generateRoadmapRequestCuadruple,
  disapproveRoadmapTicket,
  approveRoadmapTicket,
  paymentReport
} from '../../actions/roadmap';

const RoadmapItem = ({
  auth,
  roadmap: {
    _id,
    numberRoadmap,
    amountRoadmap,
    stateRoadmap,
    dateRoadmap,
    roadmapFile,
    file,
    roadmapTicket,
    loading
  },
  showActions,
  deleteRoadmapRequest,
  approveRoadmapRequest,
  generateRoadmapRequest,
  generateRoadmapRequestCuadruple,
  disapproveRoadmapTicket,
  approveRoadmapTicket,
  paymentReport,
  history
}) => {
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const [formData, setFormData] = useState({
    transaction: '',
    datePayment: '',
    payment: ''
  });

  const { transaction, datePayment, payment } = formData;

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='post bg-white p-1 my-1'>
        <div>
          {stateRoadmap === 'Solicitado' && (
            <Link
              className='btn btn-dark'
              onClick={e => deleteRoadmapRequest(_id, history, file._id)}
            >
              Cancelar Solicitud
            </Link>
          )}
        </div>
        <div>
          <p className='my-1'>
            <b>Propiedad:</b> {file.name} <br />
            <b>Expediente:</b> {file.header} <br />
            <b>Total a abonar:</b> ${amountRoadmap} <br />
            <b>Hojas de ruta solicitadas:</b> {numberRoadmap} <br />
            <b>Fecha de solicitud:</b>{' '}
            <Moment format='YYYY-MM-DD HH:mm'>{dateRoadmap}</Moment> <br />
            {stateRoadmap === 'Solicitado' ? (
              <Fragment>
                <br />
                <Link
                  className='btn btn-success'
                  onClick={e => approveRoadmapRequest(_id, history, file._id)}
                >
                  Aprobar Solicitud
                </Link>
                <Link
                  className='btn btn-danger'
                  onClick={e => deleteRoadmapRequest(_id, history, file._id)}
                >
                  Desaprobar Solicitud
                </Link>
              </Fragment>
            ) : stateRoadmap === 'Aprobado' ? (
              <Fragment>
                <b className='text-blue'>
                  Estado de solicitud: {stateRoadmap} <br />
                  <a
                    href={
                      process.env.PUBLIC_URL +
                      `/solicitudes-hojas-de-ruta-aprobadas/${file._id}/${_id}.pdf`
                    }
                    target='_blank'
                  >
                    <i className='fas fa-file-pdf'></i> Descargar solicitud
                    (Boleta de pago)
                  </a>
                  <br />
                  {roadmapFile === 'Generado-a' && (
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        `/hojas-ruta/Triples/${file.name}/${_id}.pdf`
                      }
                      target='_blank'
                    >
                      <i className='fas fa-file-pdf'></i> Hoja de ruta
                    </a>
                  )}
                  {roadmapFile === 'Generado-b' && (
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        `/hojas-ruta/Cuadruples/${file.name}/${_id}.pdf`
                      }
                      target='_blank'
                    >
                      <i className='fas fa-file-pdf'></i> Hoja de ruta cuadruple
                    </a>
                  )}
                </b>
                {roadmapFile === 'Empty' && (
                  <Fragment>
                    <br />
                    <Link
                      className='btn btn-success'
                      onClick={e =>
                        generateRoadmapRequest(_id, history, file._id)
                      }
                    >
                      Generar hojas de ruta
                    </Link>
                    <Link
                      className='btn btn-success'
                      onClick={e =>
                        generateRoadmapRequestCuadruple(_id, history, file._id)
                      }
                    >
                      Generar hojas de ruta cuadruple
                    </Link>
                    <br />
                  </Fragment>
                )}
                {!roadmapTicket.length ||
                roadmapTicket[0].status === 'Desaprobado' ? (
                  <Fragment>
                    <br />
                    <Fragment>
                      <br />
                      <b>Informar pago</b>
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
                    </Fragment>
                    <br />
                    <Link
                      className='btn btn-primary'
                      onClick={e =>
                        paymentReport(_id, formData, history, file._id)
                      }
                    >
                      Informar pago
                    </Link>
                    <br />
                  </Fragment>
                ) : (
                  roadmapTicket[0].status === 'Solicitado' && (
                    <Fragment>
                      <br />
                      <b>Informe de pago</b>
                      <br />
                      <br />
                      <b>
                        <label htmlFor='transaction'>Nº de transacción:</label>
                      </b>
                      <br />
                      <p>{roadmapTicket[0].transaction}</p>
                      <b>
                        <label htmlFor='datePayment'>Fecha y hora:</label>
                      </b>
                      <p>
                        {' '}
                        <Moment format='YYYY-MM-DD HH:mm:ss'>
                          {roadmapTicket[0].datePayment}
                        </Moment>
                      </p>
                      <b>
                        <label htmlFor='payment'>Monto abonado:</label>
                      </b>
                      <p>${roadmapTicket[0].payment}</p>
                      <b>
                        <label htmlFor='payment'>
                          Informe de pago realizado por:
                        </label>
                      </b>
                      <p>{roadmapTicket[0].user.name} </p>
                      <br />
                      <Link
                        to='#'
                        className='btn btn-success'
                        onClick={e =>
                          approveRoadmapTicket(
                            roadmapTicket[0]._id,
                            file._id,
                            history
                          )
                        }
                      >
                        Confirmar informe de pago
                      </Link>
                      <Link
                        to='#'
                        className='btn btn-danger'
                        onClick={e =>
                          disapproveRoadmapTicket(
                            roadmapTicket[0]._id,
                            file._id,
                            history
                          )
                        }
                      >
                        Denegar informe de pago
                      </Link>
                      <br />
                      <br />
                    </Fragment>
                  )
                )}
              </Fragment>
            ) : (
              stateRoadmap === 'Abonado' && (
                <Fragment>
                  <b className='text-green'>
                    Estado de solicitud: {stateRoadmap}{' '}
                  </b>
                  <br />
                  <b>Informe de pago</b>
                  <br />
                  <b>
                    <label htmlFor='transaction'>Nº de transacción:</label>
                  </b>
                  <br />
                  <p>{roadmapTicket[0].transaction}</p>
                  <b>
                    <label htmlFor='datePayment'>Fecha y hora:</label>
                  </b>
                  <p>
                    {' '}
                    <Moment format='YYYY-MM-DD HH:mm:ss'>
                      {roadmapTicket[0].datePayment}
                    </Moment>
                  </p>
                  <b>
                    <label htmlFor='payment'>Monto abonado:</label>
                  </b>
                  <p>${roadmapTicket[0].payment}</p>
                  <b>
                    <label htmlFor='payment'>
                      Informe de pago realizado por:
                    </label>
                  </b>
                  <p>{roadmapTicket[0].user.name} </p>
                  <b>
                    <label htmlFor='userAction'>Pago aprobado por:</label>
                  </b>
                  <p>{roadmapTicket[0].userAction} </p>
                  <b>
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        `/hojas-ruta-comprobantes-pago/${file._id}/${_id}.pdf`
                      }
                      target='_blank'
                    >
                      <i className='fas fa-file-pdf'></i> Comprobante de pago
                    </a>
                  </b>
                  {roadmapFile === 'Generado-a' && (
                    <b>
                      <br />
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          `/hojas-ruta/Triples/${file.name}/${_id}.pdf`
                        }
                        target='_blank'
                      >
                        <i className='fas fa-file-pdf'></i> Hojas de ruta
                      </a>
                    </b>
                  )}
                  {roadmapFile === 'Generado-b' && (
                    <b>
                      <br />
                      <a
                        href={
                          process.env.PUBLIC_URL +
                          `/hojas-ruta/Cuadruples/${file.name}/${_id}.pdf`
                        }
                        target='_blank'
                      >
                        <i className='fas fa-file-pdf'></i> Hojas de ruta
                      </a>
                    </b>
                  )}
                  {roadmapFile === 'Empty' && (
                    <Fragment>
                      <br />
                      <Link
                        className='btn btn-success'
                        onClick={e =>
                          generateRoadmapRequest(_id, history, file._id)
                        }
                      >
                        Generar hojas de ruta
                      </Link>
                      <Link
                        className='btn btn-success'
                        onClick={e =>
                          generateRoadmapRequestCuadruple(
                            _id,
                            history,
                            file._id
                          )
                        }
                      >
                        Generar hojas de ruta cuadruple
                      </Link>
                      <br />
                    </Fragment>
                  )}
                </Fragment>
              )
            )}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

RoadmapItem.defaultProps = {
  showActions: true
};

RoadmapItem.propTypes = {
  roadmap: PropTypes.object.isRequired,
  deleteRoadmapRequest: PropTypes.func.isRequired,
  approveRoadmapRequest: PropTypes.func.isRequired,
  generateRoadmapRequest: PropTypes.func.isRequired,
  generateRoadmapRequestCuadruple: PropTypes.func.isRequired,
  disapproveRoadmapTicket: PropTypes.func.isRequired,
  paymentReport: PropTypes.func.isRequired,
  approveRoadmapTicket: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  deleteRoadmapRequest,
  approveRoadmapRequest,
  generateRoadmapRequest,
  generateRoadmapRequestCuadruple,
  disapproveRoadmapTicket,
  approveRoadmapTicket,
  paymentReport
})(withRouter(RoadmapItem));
