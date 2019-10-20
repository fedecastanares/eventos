import React , { Component } from 'react';

// material-ui components
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from 'components/CustomButtons/Button.js';


// @material-ui/icons
import Search from "@material-ui/icons/Search";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
//import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';

import {CategoriasConsumer} from '../context/categoriasContext';
import {EventosConsumer} from '../context/EventosContext';

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
                onSubmit={(e) => {
                    e.preventDefault();
                    value.obtenerEventos(this.state)
                }}>
            <GridContainer
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}> 
                <GridItem xs={12} sm={6}>
                <CustomInput
                labelText="Nombre o categoria"
                id="nombre"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    endAdornment: (<InputAdornment position="end"><Search/></InputAdornment>)
                }}
                onChange={this.obtenerDatosEvento}
                ></CustomInput>
                </GridItem>


                <GridItem xs={12} sm={3}>
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

/*
 DROPDOWN

 <CustomDropdown
                    hoverColor="black"
                    name="categoria"
                    buttonText="Categorias"
                    buttonProps={{
                        fullWidth: true
                      }}
                    dropdownList={[
                    "Opciones"
                    ]}
                    
                />
*/