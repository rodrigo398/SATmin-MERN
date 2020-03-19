import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRoadmap } from '../../actions/roadmap';
import { getFile } from '../../actions/file';
import Spinner from '../layout/Spinner';

import FileItem from '../../components/file/FileItem';

const CreateRoadmap = ({
  createRoadmap,
  history,
  match,
  getFile,
  file: { file, loading }
}) => {
  useEffect(() => {
    getFile(match.params.id);
  }, [getFile, match]);

  const [formData, setFormData] = useState({
    numberRoadmap: ''
  });

  const { numberRoadmap } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createRoadmap(match.params.id, formData, history);
  };

  const calculator = () => {
    let total = 0;
    if (file.category === 'Áridos') {
      total = numberRoadmap * 10;
    }
    if (file.category === 'Laja') {
      total = numberRoadmap * 25;
    }
    if (file.category === 'Yeso') {
      total = numberRoadmap * 40;
    }
    return total;
  };

  return loading || file === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Solicitar hojas de ruta</h1>
      <FileItem file={file} showActions={false} />
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='post bg-white p-1 my-1'>
          <div></div>
          <div className='form-group'>
            <input
              type='number'
              placeholder=''
              name='numberRoadmap'
              value={numberRoadmap}
              onChange={e => onChange(e)}
            />
            <small className='form-text'>
              Ingrese la cantidad de hojas de ruta que desea solicitar.
            </small>
            <p>Total a abonar: {calculator()}</p>
            <input type='submit' className='btn btn-primary my-1' />
            <Link to={`/dashboard`} className='btn btn-danger my-1'>
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

CreateRoadmap.propTypes = {
  createRoadmap: PropTypes.func.isRequired,
  getFile: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  file: state.file
});

export default connect(mapStateToProps, { createRoadmap, getFile })(
  CreateRoadmap
);
