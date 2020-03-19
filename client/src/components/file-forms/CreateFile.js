import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFile } from '../../actions/file';

const CreateFile = ({ createFile, history }) => {
  const [formData, setFormData] = useState({
    header: '',
    name: '',
    kind: 'Cantera',
    initiator: '',
    location: '',
    department: '',
    category: 'Áridos',
    deposit: '',
    extract: '',
    area: '',
    unity: '',
    address: '',
    propertyAddress: '',
    start: '',
    end: ''
  });

  const {
    header,
    name,
    kind,
    initiator,
    location,
    department,
    category,
    deposit,
    extract,
    area,
    unity,
    address,
    propertyAddress,
    start,
    end
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createFile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Iniciar expediente nuevo</h1>
      <small>* = Campo requerido</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Encabezado'
            name='header'
            value={header}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Respetar el formato del encabezado LETRA NÚMERO AÑO
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Nombre de la propiedad'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <select name='kind' value={kind} onChange={e => onChange(e)}>
            <option value='Cantera'>Cantera</option>
            <option value='Mina'>Mina</option>
          </select>
          <small className='form-text'>
            * Por favor, seleccione el tipo de propiedad.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Iniciador/Concesionario'
            name='initiator'
            value={initiator}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Localidad'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Departamento'
            name='department'
            value={department}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <select name='category' value={category} onChange={e => onChange(e)}>
            <option value='Áridos'>Áridos</option>
            <option value='Laja'>Laja</option>
            <option value='Yeso'>Yeso</option>
            <option value='Primer'>Primer categoría</option>
            <option value='Segunda'>Segunda categoría</option>
          </select>
          <small className='form-text'>
            * Por favor, seleccione la categoría de propiedad correspondiente.
          </small>
        </div>
        <div className='form-group'>
          <select name='deposit' value={deposit} onChange={e => onChange(e)}>
            <option value=''></option>
            <option value='Vetiforme'>Vetiforme</option>
            <option value='Diseminados'>Diseminados</option>
          </select>
          <small className='form-text'>
            * En caso de corresponder, seleccione el Yacimiento.
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Extracto'
            name='extract'
            value={extract}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Por favor, ingrese el extracto de la propiedad separado por comas
            (ej. Ripio,Arena,Piedra)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='number'
            placeholder='* Área'
            name='area'
            value={area}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Ingrese un valor númerico, en caso de ser decimales usar un punto
            (ej. 5.6)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='number'
            placeholder='* Unidades'
            name='unity'
            value={unity}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Ingrese el valor anterior redondeado
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Dirección'
            name='address'
            value={address}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            Ingrese la dirección del concesionario
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Dirección de la propiedad'
            name='propertyAddress'
            value={propertyAddress}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Fecha de inicio de actividad'
            name='start'
            value={start}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Fecha de fin de actividad'
            name='end'
            value={end}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link to={`/dashboard`} className='btn btn-danger my-1'>
          Cancelar
        </Link>
      </form>
    </Fragment>
  );
};

CreateFile.propTypes = {
  createFile: PropTypes.func.isRequired
};

export default connect(null, { createFile })(withRouter(CreateFile));
