import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const StarCard = props => {
  console.log(props.character);
  console.log(props.howTall);
  console.log(props.weight);

  return (
    <div key={props.character}>
      <Card>
        <strong>{props.character}</strong>
        <CardText>
          Height: {props.howTall}cm, Weight: {props.weight}kg
        </CardText>
      </Card>
    </div>
  );
};

export default StarCard;
