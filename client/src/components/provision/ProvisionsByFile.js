import React, { Fragment, useEffect } from 'react';
import Pagination from 'pagination-react-hooks';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProvisionsItem from './ProvisionsItem';
import { getProvisionsByFile } from '../../actions/provision';

const ProvisionsByFile = ({
  getProvisionsByFile,
  provision: { provisions, loading },
  match
}) => {
  useEffect(() => {
    getProvisionsByFile(match.params.id);
  }, [getProvisionsByFile, match]);

  const show = value => (
    <ProvisionsItem key={value._id} provision={value}></ProvisionsItem>
  );

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Disposiciones</h1>
      <Pagination
        data={provisions}
        Show={show}
        displayNumber='1'
        previousText='Anterior'
        nextText='Siguiente'
      />
    </Fragment>
  );
};

ProvisionsByFile.propTypes = {
  getProvisionsByFile: PropTypes.func.isRequired,
  provision: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  provision: state.provision
});

export default connect(mapStateToProps, { getProvisionsByFile })(
  ProvisionsByFile
);
