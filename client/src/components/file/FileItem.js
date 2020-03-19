import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import 'moment/locale/fi';

const FileItem = ({
  auth,
  file: {
    _id,
    header,
    kind,
    department,
    name,
    user,
    created,
    start,
    end,
    unity,
    category,
    deposit,
    provision
  },
  showActions
}) => (
  <Fragment>
    <div className='post bg-white p-1 my-1'>
      <div>
        <a href='#'>
          <img
            className='round-img'
            src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
            alt=''
          />
          <h4>{name}</h4>
        </a>
        {showActions && (
          <Fragment>
            <Link to={`/file/${_id}`} className='btn btn-primary'>
              Consultar
            </Link>
          </Fragment>
        )}
      </div>
      <div>
        <p className='my-1'>
          Expediente: {header} <br />
          Tipo de propiedad: {kind} <br />
          Categoría: {category} <br />
          {deposit != null && <p>Yacimiento: {deposit}</p>}
          Departamento: {department} <br />
          Inicio de Actividad: <Moment format='YYYY/MM/DD'>{start}</Moment>{' '}
          <br />
          Fin de Actividad: <Moment format='YYYY/MM/DD'>{end}</Moment> <br />
          Unidades: {unity} <br />
          Expediente creado el:{' '}
          <Moment format='YYYY/MM/DD HH:mm'>{created}</Moment> <br />
          Expediente generado por: {user.name} <br />
        </p>
      </div>
    </div>
  </Fragment>
);

FileItem.defaultProps = {
  showActions: true
};

FileItem.propTypes = {
  file: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(FileItem));
