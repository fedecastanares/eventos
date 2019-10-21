import React, {Component} from 'react'
import {CategoriasConsumer} from '../context/categoriasContext';
 

class Formulario2 extends Component {
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
            <form>
                <div>   


                <input  
                    name='nombre' 
                    type='text'
                    placeholder='Nombre de evento o Ciudad'
                    onChange={this.obtenerDatosEvento}
                    />


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
                        </CategoriasConsumer></select>

                
                <input type='submit' value='Buscar'/>


                </div>
            </form>

         );
    }
}
 
export default Formulario2;