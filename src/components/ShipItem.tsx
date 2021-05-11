import React from "react";
import {Card, CardSubtitle, CardTitle} from "reactstrap";
import {IStarshipItem} from "../store/types";

interface StarshipDetails {
  starshipDetails: IStarshipItem
}

const ShipItem: React.FC<StarshipDetails> = (props) => {
  const {starshipDetails} = props;

  const {name, model, starship_class, hyperdrive_rating, passengers, manufacturer} = starshipDetails;

  return (
    <Card body className='text-center'>
      <CardTitle tag={'h5'}>{name}</CardTitle>
      <CardSubtitle tag={'h6'}>{model}</CardSubtitle>
      <div className={'card-details'}>
        <div>
          <span>starship class:</span>{' '}
          <span>{starship_class}</span>
        </div>
        <div>
          <span>hyperdrive rating:</span>{' '}
          <span>{hyperdrive_rating}</span>
        </div>
        <div>
          <span>passengers:</span>{' '}
          <span>{passengers}</span>
        </div>
        <div>
          <span>manufacturer:</span>{' '}
          <span>{manufacturer}</span>
        </div>
      </div>
    </Card>
  );
}

export default React.memo(ShipItem);
