import React, {Fragment} from 'react';

import CategoriasProvider from '../context/categoriasContext';
import EventosProvider from '../context/EventosContext.js';

import "../assets/scss/material-kit-react.scss?v=1.8.0";
import "../assets/css/personal.css"

import Header from "./Header/Header";
import Formulario from "./Formulario";
import ListaEventos from "./ListaEventos";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";

import { makeStyles } from "@material-ui/core/styles";


import { cardTitle } from "assets/jss/material-kit-react.js";


const styles = {
    cardTitle,
    textCenter: {
      textAlign: "center"
    },
    textMuted: {
      color: "#6c757d"
    },
  };

const useStyles = makeStyles(styles);


const CardGlobal = () => {

    const classes = useStyles();

    return ( 
        <Fragment>
            <EventosProvider>
                <CategoriasProvider>
                  <div className="Header">
                    <Header 
                        brand="Buscador de eventos"
                      />
                  </div>
                      <div className="padding-10">
                        <Card className={classes.textCenter}>
                           <CardHeader color="danger">
                               <Formulario />
                           </CardHeader>
                           <ListaEventos/>
                        </Card>
                      </div>
                </CategoriasProvider>
            </EventosProvider>
            <p className="firma">Federico Castañares</p>
        </Fragment>

     );
}
 
export default CardGlobal;