import React, { useState, useEffect, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { productionSheetRequest } from '../../../actions/production';
import Spinner from '../../layout/Spinner';
import FileItem from '../../file/FileItem';
import { getFile } from '../../../actions/file';

const ProducionRequest = ({
  productionSheetRequest,
  history,
  getFile,
  file: { file, loading },
  match
}) => {
  const [formData, setFormData] = useState({
    bruto_uno: '',
    bruto_dos: '',
    bruto_tres: '',
    bruto_cuatro: '',
    elab_uno: '',
    elab_dos: '',
    elab_tres: '',
    elab_cuatro: '',
    roadmaps: 0,
    personal: 0,
    accidents: 0,
    accidents_per_month: 0,
    accidents_day: 0,
    incapacity: 0,
    medida_bruto_uno: '',
    medida_bruto_dos: '',
    medida_bruto_tres: '',
    medida_bruto_cuatro: '',
    medida_elaborado_uno: '',
    medida_elaborado_dos: '',
    medida_elaborado_tres: '',
    medida_elaborado_cuatro: ''
  });

  useEffect(() => {
    getFile(match.params.id);
  }, [getFile, match]);

  const {
    bruto_uno,
    bruto_dos,
    bruto_tres,
    bruto_cuatro,
    elab_uno,
    elab_dos,
    elab_tres,
    elab_cuatro,
    roadmaps,
    personal,
    accidents,
    accidents_per_month,
    accidents_day,
    incapacity,
    medida_bruto_uno,
    medida_bruto_dos,
    medida_bruto_tres,
    medida_bruto_cuatro,
    medida_elaborado_uno,
    medida_elaborado_dos,
    medida_elaborado_tres,
    medida_elaborado_cuatro
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    productionSheetRequest(match.params.id, formData, history);
  };

  return loading || file === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Planilla de Producción</h1>
      <FileItem file={file} showActions={false} />
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='post bg-white p-1 my-1'>
          <div></div>
          <div>
            <Fragment>
              <div>
                <p>
                  {file.production[0] === undefined && (
                    <Fragment>
                      <b>
                        Planilla de producción correspondiente al periodo{' '}
                        <Moment format='MM'>{file.start}</Moment> del año{' '}
                        <Moment format='YYYY'>{file.start}</Moment>
                      </b>
                    </Fragment>
                  )}
                </p>
                <br />
                <div>
                  <p className='text-primary'>
                    {' '}
                    <b>
                      Producción de mineral en el mes <i>(EN BRUTO)</i> :
                    </b>
                  </p>
                  {file.extract[0] !== undefined && (
                    <div className='form-group'>
                      <b>
                        <label for='bruto_uno'>{file.extract[0]}:</label>
                      </b>
                      <br />
                      <input
                        type='number'
                        placeholder={file.extract[0]}
                        name='bruto_uno'
                        value={bruto_uno}
                        onChange={e => onChange(e)}
                      />
                      <br />
                      {file.kind === 'Cantera' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_bruto_uno'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_bruto_uno'
                            value='m3'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>3</sup>
                          </label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_bruto_uno'
                            value='m2'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>2</sup>
                          </label>
                        </Fragment>
                      )}
                      {file.kind === 'Mina' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_bruto_uno'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_bruto_uno'
                            value='OZ'
                            onChange={e => onChange(e)}
                          />
                          <label> OZ</label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_bruto_uno'
                            value='Kg'
                            onChange={e => onChange(e)}
                          />
                          <label> Kg</label>
                        </Fragment>
                      )}
                    </div>
                  )}
                  {file.extract[1] !== undefined && (
                    <div className='form-group'>
                      <b>
                        <label for='bruto_uno'>{file.extract[1]}:</label>
                      </b>
                      <br />
                      <input
                        type='number'
                        placeholder={file.extract[1]}
                        name='bruto_dos'
                        value={bruto_dos}
                        onChange={e => onChange(e)}
                      />
                      <br />
                      {file.kind === 'Cantera' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_bruto_dos'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_bruto_dos'
                            value='m3'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>3</sup>
                          </label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_bruto_dos'
                            value='m2'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>2</sup>
                          </label>
                        </Fragment>
                      )}
                      {file.kind === 'Mina' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_bruto_dos'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_bruto_dos'
                            value='OZ'
                            onChange={e => onChange(e)}
                          />
                          <label> OZ</label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_bruto_dos'
                            value='Kg'
                            onChange={e => onChange(e)}
                          />
                          <label> Kg</label>
                        </Fragment>
                      )}
                    </div>
                  )}
                  {file.extract[2] !== undefined && (
                    <div className='form-group'>
                      <b>
                        <label for='bruto_uno'>{file.extract[2]}:</label>
                      </b>
                      <br />
                      {file.kind === 'Cantera' && (
                        <Fragment>
                          <input
                            type='number'
                            placeholder={file.extract[2]}
                            name='bruto_tres'
                            value={bruto_tres}
                            onChange={e => onChange(e)}
                          />
                          <br />
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_bruto_tres'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_bruto_tres'
                            value='m3'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>3</sup>
                          </label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_bruto_tres'
                            value='m2'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>2</sup>
                          </label>
                        </Fragment>
                      )}
                      {file.kind === 'Mina' && (
                        <Fragment>
                          <input
                            type='number'
                            placeholder={file.extract[2]}
                            name='bruto_tres'
                            value={bruto_tres}
                            onChange={e => onChange(e)}
                          />
                          <br />
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_bruto_tres'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_bruto_tres'
                            value='OZ'
                            onChange={e => onChange(e)}
                          />
                          <label> OZ</label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_bruto_tres'
                            value='Kg'
                            onChange={e => onChange(e)}
                          />
                          <label> Kg</label>
                        </Fragment>
                      )}
                    </div>
                  )}
                  {file.extract[3] !== undefined && (
                    <div className='form-group'>
                      <b>
                        <label for='bruto_uno'>{file.extract[3]}:</label>
                      </b>
                      <br />
                      <input
                        type='number'
                        placeholder={file.extract[2]}
                        name='bruto_cuatro'
                        value={bruto_cuatro}
                        onChange={e => onChange(e)}
                      />
                      <br />
                      {file.kind === 'Cantera' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_bruto_cuatro'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_bruto_cuatro'
                            value='m3'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>3</sup>
                          </label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_bruto_cuatro'
                            value='m2'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>2</sup>
                          </label>
                        </Fragment>
                      )}
                      {file.kind === 'Mina' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_bruto_cuatro'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_bruto_cuatro'
                            value='OZ'
                            onChange={e => onChange(e)}
                          />
                          <label> OZ</label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_bruto_cuatro'
                            value='Kg'
                            onChange={e => onChange(e)}
                          />
                          <label> Kg</label>
                        </Fragment>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <p className='text-primary'>
                    {' '}
                    <b>
                      Producción de mineral en el mes <i>(ELABORADO)</i> :
                    </b>
                  </p>
                  {file.extract[0] !== undefined && (
                    <div className='form-group'>
                      <b>
                        <label for='bruto_uno'>{file.extract[0]}:</label>
                      </b>
                      <br />
                      {file.kind === 'Cantera' && (
                        <Fragment>
                          <input
                            type='number'
                            placeholder={file.extract[0]}
                            name='elab_uno'
                            value={elab_uno}
                            onChange={e => onChange(e)}
                          />
                          <br />
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_elaborado_uno'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_elaborado_uno'
                            value='m3'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>3</sup>
                          </label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_elaborado_uno'
                            value='m2'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>2</sup>
                          </label>
                        </Fragment>
                      )}
                      {file.kind === 'Mina' && (
                        <Fragment>
                          <input
                            type='number'
                            placeholder={file.extract[0]}
                            name='elab_uno'
                            value={elab_uno}
                            onChange={e => onChange(e)}
                          />
                          <br />
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_elaborado_uno'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_elaborado_uno'
                            value='OZ'
                            onChange={e => onChange(e)}
                          />
                          <label> OZ</label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_elaborado_uno'
                            value='Kg'
                            onChange={e => onChange(e)}
                          />
                          <label> Kg</label>
                        </Fragment>
                      )}
                    </div>
                  )}
                  {file.extract[1] !== undefined && (
                    <div className='form-group'>
                      <b>
                        <label for='bruto_uno'>{file.extract[1]}:</label>
                      </b>
                      <br />
                      <input
                        type='number'
                        placeholder={file.extract[1]}
                        name='elab_dos'
                        value={elab_dos}
                        onChange={e => onChange(e)}
                      />
                      <br />
                      {file.kind === 'Cantera' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_elaborado_dos'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_elaborado_dos'
                            value='m3'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>3</sup>
                          </label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_elaborado_dos'
                            value='m2'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>2</sup>
                          </label>
                        </Fragment>
                      )}
                      {file.kind === 'Mina' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_elaborado_dos'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_elaborado_dos'
                            value='OZ'
                            onChange={e => onChange(e)}
                          />
                          <label> OZ</label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_elaborado_dos'
                            value='Kg'
                            onChange={e => onChange(e)}
                          />
                          <label> Kg</label>
                        </Fragment>
                      )}
                    </div>
                  )}
                  {file.extract[2] !== undefined && (
                    <div className='form-group'>
                      <b>
                        <label for='bruto_uno'>{file.extract[2]}:</label>
                      </b>
                      <br />
                      <input
                        type='number'
                        placeholder={file.extract[2]}
                        name='elab_tres'
                        value={elab_tres}
                        onChange={e => onChange(e)}
                      />
                      <br />
                      {file.kind === 'Cantera' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_elaborado_tres'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_elaborado_tres'
                            value='m3'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>3</sup>
                          </label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_elaborado_tres'
                            value='m2'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>2</sup>
                          </label>
                        </Fragment>
                      )}
                      {file.kind === 'Mina' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_elaborado_tres'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_elaborado_tres'
                            value='OZ'
                            onChange={e => onChange(e)}
                          />
                          <label> OZ</label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_elaborado_tres'
                            value='Kg'
                            onChange={e => onChange(e)}
                          />
                          <label> Kg</label>
                        </Fragment>
                      )}
                    </div>
                  )}
                  {file.extract[3] !== undefined && (
                    <div className='form-group'>
                      <b>
                        <label for='bruto_uno'>{file.extract[3]}:</label>
                      </b>
                      <br />
                      <input
                        type='number'
                        placeholder={file.extract[2]}
                        name='elab_cuatro'
                        value={elab_cuatro}
                        onChange={e => onChange(e)}
                      />
                      <br />
                      {file.kind === 'Cantera' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_elaborado_cuatro'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_elaborado_cuatro'
                            value='m3'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>3</sup>
                          </label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_elaborado_cuatro'
                            value='m2'
                            onChange={e => onChange(e)}
                          />
                          <label>
                            {' '}
                            m<sup>2</sup>
                          </label>
                        </Fragment>
                      )}
                      {file.kind === 'Mina' && (
                        <Fragment>
                          <input
                            type='checkbox'
                            id='1'
                            name='medida_elaborado_cuatro'
                            value='Tonelada'
                            onChange={e => onChange(e)}
                          />
                          <label> Toneladas</label>
                          <br />
                          <input
                            type='checkbox'
                            id='2'
                            name='medida_elaborado_cuatro'
                            value='OZ'
                            onChange={e => onChange(e)}
                          />
                          <label> OZ</label>
                          <br />
                          <input
                            type='checkbox'
                            id='3'
                            name='medida_elaborado_cuatro'
                            value='Kg'
                            onChange={e => onChange(e)}
                          />
                          <label> Kg</label>
                        </Fragment>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <p className='text-primary'>
                    {' '}
                    <b>Cantidad de hojas de ruta utilizadas :</b>
                  </p>
                  <div className='form-group'>
                    <input
                      type='number'
                      placeholder='Cantidad de hojas de ruta'
                      name='roadmaps'
                      value={roadmaps}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-primary'>
                    {' '}
                    <b>Cantidad de personal afectado :</b>
                  </p>
                  <div className='form-group'>
                    <input
                      type='number'
                      placeholder=''
                      name='personal'
                      value={personal}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <p>
                  <b>Accidentes:</b>
                </p>
                <div>
                  <p className='text-primary'>
                    {' '}
                    <b>Accidentes por mes sin tiempo perdido :</b>
                  </p>
                  <div className='form-group'>
                    <input
                      type='number'
                      placeholder=''
                      name='accidents'
                      value={accidents}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-primary'>
                    {' '}
                    <b>Accidentes por mes con tiempo perdido :</b>
                  </p>
                  <div className='form-group'>
                    <input
                      type='number'
                      placeholder=''
                      name='accidents_per_month'
                      value={accidents_per_month}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-primary'>
                    {' '}
                    <b>Días perdidos por accidentes por mes :</b>
                  </p>
                  <div className='form-group'>
                    <input
                      type='number'
                      placeholder=''
                      name='accidents_day'
                      value={accidents_day}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>
                <div>
                  <p className='text-primary'>
                    {' '}
                    <b>Incapacidades permanentes :</b>
                  </p>
                  <div className='form-group'>
                    <input
                      type='number'
                      placeholder=''
                      name='incapacity'
                      value={incapacity}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <input type='submit' className='btn btn-primary my-1' />
                </div>
              </div>
            </Fragment>
          </div>
        </div>
      </form>

      <div className='selected-items'></div>
    </Fragment>
  );
};

ProducionRequest.propTypes = {
  productionSheetRequest: PropTypes.func.isRequired,
  getFile: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  file: state.file
});

export default connect(mapStateToProps, {
  productionSheetRequest,
  getFile
})(withRouter(ProducionRequest));
