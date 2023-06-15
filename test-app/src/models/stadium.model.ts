import {Entity, model, property, hasOne} from '@loopback/repository';
import {Team} from './team.model';

@model()
export class Stadium extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'number',
    required: true,
  })
  capacity: number;



  @hasOne(() => Team)
  team: Team;

  @property({
    type: 'number',
  })
  teamId?: number;

  constructor(data?: Partial<Stadium>) {
    super(data);
  }
}

export interface StadiumRelations {
  // describe navigational properties here
}

export type StadiumWithRelations = Stadium & StadiumRelations;
