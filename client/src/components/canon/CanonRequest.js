import React, { Fragment, useEffect } from 'react';
import Pagination from 'pagination-react-hooks';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import CanonItem from './CanonItem';
import { getCanonRequests } from '../../actions/canon';

const CanonRequest = ({
  getCanonRequests,
  canon: { canons, loading },
  match
}) => {
  useEffect(() => {
    getCanonRequests(match.params.id);
  }, [getCanonRequests, match]);

  const show = value => <CanonItem key={value._id} canon={value}></CanonItem>;

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>
        Solicitudes de Liquidación de Canon
      </h1>
      <Fragment>
        <div className='post bg-white p-1 my-1'>
          <div>
            <Link to={`/file/${match.params.id}`} className='btn btn-primary'>
              Regresar
            </Link>
          </div>
          <div>
            <p className='my-1'>
              <Link to={`/canon-request/${match.params.id}`}>
                <b>Generar nueva solicitud de Liquidación de Canon Minero</b>
              </Link>
            </p>
          </div>
        </div>
      </Fragment>
      {/*
        <div className='posts'>
          {files.map(file => (
            <FileItem key={file._id} file={file}></FileItem>
          ))}
        </div>
        */}
      <Pagination
        data={canons}
        Show={show}
        displayNumber='5'
        previousText='Anterior'
        nextText='Siguiente'
      />
    </Fragment>
  );
};

CanonRequest.propTypes = {
  getCanonRequests: PropTypes.func.isRequired,
  canon: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  canon: state.canon
});

export default connect(mapStateToProps, { getCanonRequests })(
  withRouter(CanonRequest)
);
