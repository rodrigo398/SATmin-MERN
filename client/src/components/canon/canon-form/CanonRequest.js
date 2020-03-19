import React, { useState, useEffect, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestCanon, getRequested } from '../../../actions/canon';
import Spinner from '../../layout/Spinner';
import FileItem from '../../file/FileItem';
import { getFile } from '../../../actions/file';

const CanonRequest = ({
  requestCanon,
  history,
  getFile,
  file: { file, loading },
  getRequested,
  canon: { canon },
  match
}) => {
  const [formData, setFormData] = useState({
    dateRequest: '',
    options: []
  });

  useEffect(() => {
    getFile(match.params.id);
  }, [getFile, match]);

  useEffect(() => {
    getRequested(match.params.id);
  }, [getRequested, match]);

  const { options, dateRequest } = formData;

  const onChangeRequest = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChange = e => {
    let index;
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(e.target.value);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }
    setFormData({ ...formData, [e.target.options]: e.target.value });
  };

  const createTable = () => {
    let date = new Date(); //Or date from input
    if (dateRequest !== '') {
      date = new Date(dateRequest);
    }
    const endDate = new Date(file.end);
    let auxMonth = 0;
    let total = 0;
    let monto = 0;
    let multa = 0;
    let lastCanonDate = new Date(file.start);
    let lastCanonMonth = lastCanonDate.getMonth();
    console.log(file.canon[0]);
    if (file.canon[0] != null) {
      lastCanonDate.setFullYear(file.canon[0].description[0].year); //Set last year canon
      if (file.canon[0].description[0].period === 2) {
        auxMonth = 1;
        lastCanonDate.setFullYear(lastCanonDate.getFullYear() + 1);
      } else {
        auxMonth = 2;
      }
    } else {
      if (file.kind === 'Mina') {
        lastCanonDate.setFullYear(lastCanonDate.getFullYear() + 3);
      }
      if (lastCanonMonth < 6) {
        auxMonth = 1;
      } else {
        auxMonth = 2;
      }
    }
    let descriptionArray = [];

    for (
      let i = 0;
      i < 12 && lastCanonDate.getFullYear() <= endDate.getFullYear();
      i++
    ) {
      /* Cálculo 2016 */
      if (file.category === 'Áridos' && lastCanonDate.getFullYear() >= 2016) {
        monto = 1120;
        monto = monto * file.unity;
      }
      if (file.category === 'Primer' && lastCanonDate.getFullYear() >= 2016) {
        if (file.deposit === 'Vetiforme') {
          monto = 160;
          monto = monto * file.unity;
        } else {
          monto = 1600;
          monto = monto * file.unity;
        }
      }
      if (file.category === 'Laja' && lastCanonDate.getFullYear() >= 2016) {
        monto = 80;
        monto = monto * file.unity;
      }
      if (file.category === 'Segunda' && lastCanonDate.getFullYear() >= 2016) {
        if (file.deposit === 'Vetiforme') {
          monto = 80;
          monto = monto * file.unity;
        } else {
          monto = 800;
          monto = monto * file.unity;
        }
      }
      /* Cálculo 2014 - 2015 */
      if (
        file.category === 'Áridos' &&
        (lastCanonDate.getFullYear() === 2015 ||
          lastCanonDate.getFullYear() === 2014)
      ) {
        monto = 240;
        monto = monto * file.unity;
      }
      if (
        file.category === 'Primer' &&
        (lastCanonDate.getFullYear() === 2015 ||
          lastCanonDate.getFullYear() === 2014)
      ) {
        if (file.deposit === 'Vetiforme') {
          monto = 40;
          monto = monto * file.unity;
        } else {
          monto = 400;
          monto = monto * file.unity;
        }
      }
      if (
        file.category === 'Laja' &&
        (lastCanonDate.getFullYear() === 2015 ||
          lastCanonDate.getFullYear() === 2014)
      ) {
        monto = 40;
        monto = monto * file.unity;
      }
      if (
        file.category === 'Segunda' &&
        (lastCanonDate.getFullYear() === 2015 ||
          lastCanonDate.getFullYear() === 2014)
      ) {
        if (file.deposit === 'Vetiforme') {
          monto = 20;
          monto = monto * file.unity;
        } else {
          monto = 200;
          monto = monto * file.unity;
        }
      }
      /* Cálculo 2013 */
      if (file.category === 'Áridos' && lastCanonDate.getFullYear() <= 2013) {
        monto = 20;
        monto = monto * file.unity;
      }
      if (file.category === 'Primer' && lastCanonDate.getFullYear() <= 2013) {
        if (file.deposit === 'Vetiforme') {
          monto = 10;
          monto = monto * file.unity;
        } else {
          monto = 100;
          monto = monto * file.unity;
        }
      }
      if (file.category === 'Laja' && lastCanonDate.getFullYear() <= 2013) {
        monto = 20;
        monto = monto * file.unity;
      }
      if (file.category === 'Segunda' && lastCanonDate.getFullYear() <= 2013) {
        if (file.deposit === 'Vetiforme') {
          monto = 5;
          monto = monto * file.unity;
        } else {
          monto = 50;
          monto = monto * file.unity;
        }
      }
      let auxiliarYear = lastCanonDate.getFullYear() + 1;
      let yearDiff = (date.getFullYear() - auxiliarYear) * 12;
      if (auxMonth === 1) {
        yearDiff = yearDiff + 6;
      }
      yearDiff = yearDiff + date.getMonth() + 1;
      let auxMulta;
      if (yearDiff >= 14) {
        auxMulta = yearDiff / 14;
        auxMulta = Math.floor(auxMulta);
        multa = (monto * 20) / 100;
        multa = multa * auxMulta;
      } else {
        multa = 0;
      }
      total = total + monto + multa;
      let sub = monto + multa;
      descriptionArray.push(
        <tr>
          <td>
            <input type='checkbox' value={sub} onChange={e => onChange(e)} />
            <label>
              {' '}
              <b>
                Periodo 0{auxMonth} del Año {lastCanonDate.getFullYear()},
                Monto: ${monto} - Multa:${multa} Diferencia:{yearDiff}
              </b>
            </label>
          </td>
        </tr>
      );
      if (endDate.getFullYear() === lastCanonDate.getFullYear()) {
        if (endDate.getMonth() < 6) {
          auxMonth = 3;
        } else {
          if (
            endDate.getFullYear() === lastCanonDate.getFullYear() &&
            auxMonth === 1
          ) {
            auxMonth = 2;
          } else {
            auxMonth = 3;
          }
        }
      } else {
        auxMonth = auxMonth + 1;
      }
      if (auxMonth === 3) {
        auxMonth = 1;
        lastCanonDate.setFullYear(lastCanonDate.getFullYear() + 1);
      }
    }
    return descriptionArray;
  };

  const onSubmit = e => {
    e.preventDefault()
    if (options.length === 0) {
      alert(
        'Debe seleccionar al menos un periodo para realizar la liquidaciòn.'
      );
    } else {
      requestCanon(match.params.id, formData, history);
    }
  };

  const getValues = () => {
    let total = 0;
    options.map(number => {
      let values = number;
      total = total + parseInt(values);
    });
    return total;
  };

  return loading || file === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Canon Minero</h1>
      <FileItem file={file} showActions={false} />
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='post bg-white p-1 my-1'>
          <div></div>
          <div>
            {canon === null ? (
              <Fragment>
                <input
                  type='text'
                  name='dateRequest'
                  value={dateRequest}
                  onChange={e => onChangeRequest(e)}
                />
                <br />
                <table>{createTable()}</table>
                <p>Total a Abonar: ${getValues()}</p>
                <input type='submit' className='btn btn-primary my-1' />
              </Fragment>
            ) : (
              <Fragment>
                <p>
                  Dispone solicitudes de liquidaciòn de canon sin
                  evaluar/abonar. Para generar una nueva solicitud debe esperar
                  la aprobación/desaprobación de la solicitud. <br />
                  En caso de que la solicitud se encuentre aprobada, debe
                  realizar el pago y su respectivo informe de pago. <br />
                  <Link
                    to={`/canon-requests/${file._id}`}
                    className='btn btn-primary'
                  >
                    Gestionar solicitudes
                  </Link>
                </p>
              </Fragment>
            )}
          </div>
        </div>
      </form>

      <div className='selected-items'></div>
    </Fragment>
  );
};

CanonRequest.propTypes = {
  requestCanon: PropTypes.func.isRequired,
  getFile: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
  getRequested: PropTypes.func.isRequired,
  canon: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  file: state.file,
  canon: state.canon
});

export default connect(mapStateToProps, {
  requestCanon,
  getFile,
  getRequested
})(withRouter(CanonRequest));
