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
        console.log("ObtenerDatosEvento ejecutandose")
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    insertarMenuItems() {
        return(
        <CategoriasConsumer>
            {(value) => {
                return (
                    value.categorias.map(categoria => (
                    <MenuItem key={categoria.id} value={categoria.id}>
                        {categoria.name_localized}
                    </MenuItem>
                    ))
                )
            }}
        </CategoriasConsumer>
    )}

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
                                value={this.state.categoria}
                                onChange={this.obtenerDatosEvento}
                            >   {this.insertarMenuItems()}
                            </Select>
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