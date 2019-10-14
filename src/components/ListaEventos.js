import React, {Fragment} from 'react';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {EventosConsumer} from '../context/EventosContext';
import Evento from './Evento';


const ListaEventos = () => {
    return ( 
        <Fragment>
        <GridContainer
                container="true" 
                direction="row"
                justify="center"
                alignItems="center"
                spacing={30}>
                <GridItem xs={12} sm={12}>
                 <h1>Eventos</h1>
                </GridItem>
            <EventosConsumer>
                {(value) => {
                    return value.eventos.map(evento => (
                    <GridItem xs={12} sm={6} md={4}>
                        <Evento
                            key={evento.id}
                            evento={evento}
                        />
                    </GridItem>
                        
                    ))
                }}
                
            </EventosConsumer>
        </GridContainer>

        </Fragment>
     );
}
 
export default ListaEventos;