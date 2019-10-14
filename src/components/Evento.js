import React, { Component } from 'react';
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);



const Evento = ({evento}) => {
const classes = useStyles();

let { text } = evento.description;
if (text) {

    if (text.length > 250) {
        text = text.substr(0, 250);
    } else {
        text = null;
    }
}
    return ( 
        <Card className={classes.textCenter} style={{width: "16rem"}}>
            {evento.logo 
             ? <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={evento.logo.url}
                alt={evento.name}
            /> : null }
        <CardBody>
          <h4 className={classes.cardTitle}>{evento.name.text}</h4>
          <p>{text} [...]</p>
          <div className="btnMasInfo">
                <a target="_blank" rel="noopener noreferrer" href={evento.url}>
          <Button>Mas informacion</Button>
                </a>
          </div>
        </CardBody>
      </Card>
     );
}
 
export default Evento;