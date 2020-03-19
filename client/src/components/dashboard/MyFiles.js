import React, { Fragment } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MyFiles = ({ file }) => {
  const myFiles = file.map(fi => (
    <tr key={fi._id}>
      <td>{fi}</td>
      <td className='hide-sm'>{fi}</td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Expedientes</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Expediente</th>
            <th className='hide-sm'>Encabezado</th>
            <th className='hide-sm'>Nombre</th>
            <th />
          </tr>
        </thead>
        <tbody>{myFiles}</tbody>
      </table>
    </Fragment>
  );
};

MyFiles.propTypes = {
  file: PropTypes.array.isRequired
};

export default MyFiles;
