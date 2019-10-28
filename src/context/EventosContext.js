import React, { Component } from 'react';
import axios from 'axios';


const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;


class EventosProvider extends Component {
    
    token = 'WHO4TBNWFTHKONQVGKT4'
    ordenar = 'date'
    state = { 
        eventos: []
     }
    
    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}`;
        let config = {
            headers: {'Authorization': "bearer " + this.token}
        };
        
        let bodyParameters = {
        }       
        const eventos = await axios(url, bodyParameters, config);
        this.setState({
            eventos: eventos.data.events
        })
    }

    render() { 
        return ( 
            <EventosContext.Provider value={{
                eventos: this.state.eventos,
                obtenerEventos : this.obtenerEventos
            }}>
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;