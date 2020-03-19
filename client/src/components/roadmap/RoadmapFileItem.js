import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const RoadmapFileItem = ({
  auth,
  roadmap: {
    numberRoadmap,
    amountRoadmap,
    dateRoadmap,
    dateApproveRoadmap,
    requestRoadmap,
    file
  },
  showActions
}) => {
  return (
    <Fragment>
      <div className='post bg-white p-1 my-1'>
        <div>
          {showActions && (
            <Fragment>
              <h4>Hojas de ruta</h4>
            </Fragment>
          )}
        </div>
        <div>
          <p>
            <b>Última solicitud de hojas de ruta</b>
            <br />
            <b>Cantidad solicitada:</b> {numberRoadmap} hojas de ruta. <br />
            <b>Por el monto de:</b> ${amountRoadmap} pesos. <br />
            <b>Solicitud realizada el:</b>{' '}
            <Moment format='YYYY/MM/DD'>{dateRoadmap}</Moment>. <br />
            <b>Solicitud aprobada el:</b>{' '}
            <Moment format='YYYY/MM/DD'>{dateApproveRoadmap}</Moment>. <br />
            <b>Solicitud Nº:</b> {(requestRoadmap + '').padStart(6, '0')}
          </p>
          <Link to={`/roadmap-requests/${file}`}>
            Gestionar Solicitudes de Hoja de Ruta
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

RoadmapFileItem.defaultProps = {
  showActions: true
};

RoadmapFileItem.propTypes = {
  roadmap: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(RoadmapFileItem));
