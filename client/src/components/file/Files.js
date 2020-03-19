import React, { Fragment, useEffect } from 'react';
import Pagination from 'pagination-react-hooks';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import FileItem from './FileItem';
import { getFiles } from '../../actions/file';

const Files = ({ getFiles, file: { files, loading } }) => {
  useEffect(() => {
    getFiles();
  }, [getFiles]);

  const show = value => <FileItem key={value._id} file={value}></FileItem>;

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Expedientes</h1>
      {/*
      <div className='posts'>
        {files.map(file => (
          <FileItem key={file._id} file={file}></FileItem>
        ))}
      </div>
      */}
      <Pagination
        data={files}
        Show={show}
        displayNumber='1'
        previousText='Anterior'
        nextText='Siguiente'
      />
    </Fragment>
  );
};

Files.propTypes = {
  getFiles: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  file: state.file
});

export default connect(mapStateToProps, { getFiles })(Files);
