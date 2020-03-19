import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const CanonFileItem = ({
  auth,
  canon: { year, total, status, file, _id, description },
  showActions
}) => {
  const actualDate = new Date();
  const actualYear = actualDate.getFullYear() - 1;
  const actualMonth = actualDate.getMonth() + 1;
  const orderDescription = () => {
    let ordered = description.sort(function(a, b) {
      return parseFloat(b.code) - parseFloat(a.code);
    });
    return (
      <Fragment>
        <p key={ordered[0].code}>
          <b>Última liquidación abonada:</b> Periodo 0{ordered[0].period} del
          Año {ordered[0].year} <br />
          {ordered[0].period === 2 &&
            ((actualYear - ordered[0].year) * 12 + actualMonth >= 14 ? (
              <Fragment>
                <p className='danger-color-p'>
                  Estado de propiedad: Posee deuda
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <p>Estado de propiedad: No posee deuda</p>
              </Fragment>
            ))}
          {ordered[0].period === 1 &&
            ((actualYear - ordered[0].year) * 12 + actualMonth + 6 >= 14 ? (
              <Fragment>
                <p className='danger-color-p'>
                  Estado de propiedad: Posee deuda
                </p>
              </Fragment>
            ) : (
              <Fragment>
                <p>Estado de propiedad: No posee deuda</p>
              </Fragment>
            ))}
        </p>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div className='post bg-white p-1 my-1'>
        <div>
          {showActions && (
            <Fragment>
              <h4>Canon Minero</h4>
            </Fragment>
          )}
        </div>
        <div>
          {orderDescription()}
          <Link to={`/canon-requests/${file}`}>Gestionar Liquidaciones</Link>
        </div>
      </div>
    </Fragment>
  );
};

CanonFileItem.defaultProps = {
  showActions: true
};

CanonFileItem.propTypes = {
  canon: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(withRouter(CanonFileItem));
