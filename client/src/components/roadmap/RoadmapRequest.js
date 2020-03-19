import React, { Fragment, useEffect } from 'react';
import Pagination from 'pagination-react-hooks';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import RoadmapItem from './RoadmapItem';
import { getRoadmapRequests } from '../../actions/roadmap';

const RoadmapRequest = ({
  getRoadmapRequests,
  roadmap: { roadmaps, loading },
  match
}) => {
  useEffect(() => {
    getRoadmapRequests(match.params.id);
  }, [getRoadmapRequests, match]);

  const show = value => (
    <RoadmapItem key={value._id} roadmap={value}></RoadmapItem>
  );

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Solicitudes de Hojas de Ruta</h1>
      <Fragment>
        <div className='post bg-white p-1 my-1'>
          <div>
            <Link to={`/file/${match.params.id}`} className='btn btn-primary'>
              Regresar
            </Link>
          </div>
          <div>
            <p className='my-1'>
              <Link to={`/roadmap-request/${match.params.id}`}>
                <b>Generar nueva solicitud de Hoja de Ruta</b>
              </Link>
            </p>
          </div>
        </div>
      </Fragment>
      <Pagination
        data={roadmaps}
        Show={show}
        displayNumber='5'
        previousText='Anterior'
        nextText='Siguiente'
      />
    </Fragment>
  );
};

RoadmapRequest.propTypes = {
  getRoadmapRequests: PropTypes.func.isRequired,
  roadmap: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  roadmap: state.roadmap
});

export default connect(mapStateToProps, { getRoadmapRequests })(
  withRouter(RoadmapRequest)
);
