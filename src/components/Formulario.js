import React , { Component } from 'react';

// material-ui components
import Button from 'components/CustomButtons/Button.js';


// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';

import {CategoriasConsumer} from '../context/categoriasContext';
import {EventosConsumer} from '../context/EventosContext';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';



class Formulario extends Component {
    state = { 
        nombre: '',
        categoria: ''
     }



    obtenerDatosEvento = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    

    render() { 
        return (
            <EventosConsumer>
                {(value) => {
                    return( 
                    <form 
                    id='form'
                onSubmit={(e) => {
                    e.preventDefault();
                    value.obtenerEventos(this.state);
                    document.getElementById("form").reset();
                }}>
            <GridContainer
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}> 
                <GridItem xs={12} sm={6}>
                <TextField 
                    autoComplete="off"
                    fullWidth='true' 
                    id="outlined-dense"
                    name='nombre' 
                    type='text'
                    label='Nombre de evento o Ciudad'
                    variant="outlined"
                    onChange={this.obtenerDatosEvento}
                    />
                </GridItem>


                <GridItem xs={12} sm={3}>
                    <FormControl fullWidth='true'>
                        <InputLabel  htmlFor="categoria">
                        Categorias
                        </InputLabel>
                        <Select
                        value={this.categoria}
                        onChange={this.obtenerDatosEvento}
                        inputProps={{
                            name: 'categoria',
                            id: 'categoria',
                        }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {/* El MenuItem Musica manual funciona, pero los cargados con el arreglo no 
                            doc: https://material-ui.com/es/components/selects/   y la api https://material-ui.com/es/api/menu-item/#menuitem-api */}
                            <MenuItem value={101}>Musica Manual</MenuItem>
                            <CategoriasConsumer>
                                        {/* En el HTML el de arriba tiene las propiedades role:option y el value es data-value, y el de abajo role:menuoption y value */}
                                        {(value) => {
                                            return (
                                                value.categorias.map(categoria => (
                                                    <MenuItem value={categoria.id} key={categoria.id} role='option' data-value={categoria.id}>
                                                        {categoria.name_localized}
                                                    </MenuItem>
                                                ))
                                            )
                                        }}
                            </CategoriasConsumer>
                        </Select>

                        {/* Este Select es el que funciona */}
                        <select 
                    name="categoria"
                    onChange={this.obtenerDatosEvento}
                    >
                    <option value="">-- Seleccione Categoria </option>
                        <CategoriasConsumer>
                            {(value) => {
                                return (
                                    value.categorias.map(categoria => (
                                        <option key={categoria.id} value={categoria.id}>{categoria.name_localized}
                                            </option>
                                    ))
                                )
                            }}
                        </CategoriasConsumer>
                    </select>
                    </FormControl>
                </GridItem>
                
                <GridItem xs={12} sm={3}>
                    <Button 
                    type="submit"
                    >Buscar</Button>
                </GridItem>
            </GridContainer>
            </form>
            )
        }}
        </EventosConsumer>
            
         );
    }
}
 
export default Formulario;