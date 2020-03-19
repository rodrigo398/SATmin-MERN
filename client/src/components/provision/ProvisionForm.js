import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProvision } from '../../actions/provision';
import { withRouter } from 'react-router-dom';

const ProvisionForm = ({ addProvision, history, match }) => {
  const [file, setFile] = useState('');
  const [provisionHeader, setHeader] = useState('');
  const [provisionType, setType] = useState('');
  const [provisionDate, setDate] = useState('');

  //const [filename, setFilename] = useState('Seleccione un archivo');
  //const [uploadedFile, setUploadedFile] = useState({});

  const onChangeFile = e => {
    setFile(e.target.files[0]);
    //setFilename(e.target.files[0].name);
  };

  const fileId = match.params.id;

  const onChangeHeader = e => {
    setHeader(e.target.value);
  };

  const onChangeType = e => {
    setType(e.target.value);
  };

  const onChangeDate = e => {
    setDate(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('provisionHeader', provisionHeader);
    formData.append('provisionType', provisionType);
    formData.append('provisionDate', provisionDate);
    formData.append('provisionFileId', fileId);

    try {
      addProvision(formData, history);
      /*const res = await axios.post('/api/provision', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      */

      //const { fileName, filePath } = res.data;

      //setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Iniciar nueva disposiciòn</h1>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input type='text' name='povisionHeader' onChange={onChangeHeader} />
          <input type='text' name='povisionType' onChange={onChangeType} />
          <input type='text' name='povisionDate' onChange={onChangeDate} />
          <input type='file' onChange={onChangeFile} />
        </div>
        <input
          type='submit'
          value='Subir'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </Fragment>
  );
};

ProvisionForm.propTypes = {
  addProvision: PropTypes.func.isRequired
};

export default connect(null, { addProvision })(withRouter(ProvisionForm));

/*  addProvision,
  getFile,
  file: { file, loading },
  match
}) => {
  useEffect(() => {
    getFile(match.params.id);
  }, [getFile]);

  return loading || file === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h5 className='large text-primary'>Disposiciones</h5>
      <FileItem file={file} showActions={false} />
      <div className='container'>
        <h1 className='large text-primary'>Nueva disposición</h1>
        <form>
          <div className='form-group'>
            <small>
              Seleccione la disposición a registrar. El archivo debe encontrarse
              en formato .pdf
            </small>
            <br />
            <input type='file' />
          </div>
          <div className='form-group'>
            <br />
            <button className='btn btn-primary' type='submit'>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

ProvisionForm.propTypes = {
  addProvision: PropTypes.func.isRequired,
  getFile: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  file: state.file
});

export default connect(mapStateToProps, { addProvision, getFile })(
  ProvisionForm
);
*/
