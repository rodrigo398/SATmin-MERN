import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const ProvisionItem = ({
  auth,
  provision: {
    _id,
    provisionHeader,
    provisionType,
    provisionDate,
    provisionDocument,
    date,
    file
  },
  showActions
}) => (
  <Fragment>
    <div className='post bg-white p-1 my-1'>
      <div>
        <h4>Disposiciones</h4>
        {showActions && (
          <Fragment>
            <a
              className='btn btn-primary'
              href={
                process.env.PUBLIC_URL +
                '/uploads/Disposiciones/' +
                provisionDocument
              }
            >
              <i className='fas fa-file-pdf'></i> Consultar
            </a>
          </Fragment>
        )}
      </div>
      <div>
        <p className='my-1'>
          Disposición: {provisionHeader} <br />
          Tipo de disposición: {provisionType} <br />
          Disposición emitida el:{' '}
          <Moment format='DD-MM-YYYY'>{provisionDate}</Moment> <br />
          Consultar disposición: {provisionDocument} <br />
          Disposición registrada el:{' '}
          <Moment format='DD-MM-YYYY HH:mm'>{date}</Moment> <br />
          <Link to={`/provisions/${file}`}>
            <i className='fas fa-folder-open'></i> Consultar disposiciones
          </Link>
        </p>
      </div>
    </div>
  </Fragment>
);

ProvisionItem.defaultProps = {
  showActions: true
};

ProvisionItem.propTypes = {
  provision: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(ProvisionItem));
