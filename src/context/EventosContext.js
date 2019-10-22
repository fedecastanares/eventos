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
     /* Doc de la API, menciona que se puede pasar el token por url o por header, de la nada me dejo de funcionar la request por 403, 
        ya aprovecho y quiero aprender a pasar el token por los headers
                Doc de auth:
            https://www.eventbrite.com/platform/docs/authentication
            
                Endpoint:
                https://www.eventbrite.com/platform/api#/reference/event-search
                
                */
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