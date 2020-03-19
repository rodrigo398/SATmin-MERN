import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import FileItem from './FileItem';
import CanonFileItem from '../canon/CanonFileItem';
import RoadmapFileItem from '../roadmap/RoadmapFileItem';
import ProvisionItem from '../provision/ProvisionItem';
import { getFile } from '../../actions/file';

const File = ({ getFile, file: { file, loading }, match }) => {
  useEffect(() => {
    getFile(match.params.id);
  }, [getFile, match]);

  return loading || file === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <FileItem file={file} showActions={false} />
      {file.provision.length ? (
        <Fragment>
          <ProvisionItem provision={file.provision[0]}></ProvisionItem>
        </Fragment>
      ) : (
        <Fragment>
          <div className='post bg-white p-1 my-1'>
            <div>
              <h4>Disposiciones</h4>
            </div>
            <div>
              <p className='my-1'>
                No se encontraron disposiciones registradas. <br />
              </p>
            </div>
          </div>
        </Fragment>
      )}
      {file.canon.length ? (
        <Fragment>
          <CanonFileItem canon={file.canon[0]}></CanonFileItem>
        </Fragment>
      ) : (
        <Fragment>
          <div className='post bg-white p-1 my-1'>
            <div>
              <h4>Canon Minero</h4>
            </div>
            <div>
              <p className='my-1'>
                No se encontraron liquidaciones abonadas registradas. <br />
                Verifique si la propiedad posee deuda.
              </p>
              <Link to={`/canon-requests/${file._id}`}>
                Gestionar Liquidaciones
              </Link>
            </div>
          </div>
        </Fragment>
      )}
      {file.roadmap.length ? (
        <Fragment>
          <RoadmapFileItem roadmap={file.roadmap[0]}></RoadmapFileItem>
        </Fragment>
      ) : (
        <Fragment>
          <div className='post bg-white p-1 my-1'>
            <div>
              <h4>Hojas de ruta</h4>
            </div>
            <div>
              <p className='my-1'>
                No se encontraron solicitudes de hojas de ruta registradas.{' '}
              </p>
              <Link to={`/roadmap-requests/${file._id}`}>
                Gestionar Solicitudes de Hoja de Ruta
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

File.propTypes = {
  getFile: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  file: state.file
});

export default connect(mapStateToProps, { getFile })(withRouter(File));
