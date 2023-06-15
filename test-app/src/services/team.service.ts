import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { Team } from '../models';
import { TeamRepository } from '../repositories';
import { repository } from '@loopback/repository';
import { getModelSchemaRef, requestBody } from '@loopback/rest';
@injectable({scope: BindingScope.TRANSIENT})
export class TeamService {
  constructor(
    @repository(TeamRepository)
    public teamRepository : TeamRepository
  ) {}
  async synchTeamDb(data: any) : Promise<Team>{
    const existTeam = await this.teamRepository.findOne({where: {name:data.name}});
    if (!existTeam){
      const newTeam = await this.teamRepository.create({
        name: data.name,
        abbr: data.club.abbr
      })
      return newTeam;
    }
    else {
      type TeamField = keyof typeof fieldMapping;
      const fieldMapping = {
        abbr: data.club.abbr
      };
      const updatedFields: Partial<Team> = {};
      let updated = false;

      for (const field in fieldMapping) {
        const typedField = field as TeamField;
        if (existTeam[typedField] !== fieldMapping[typedField]) {
          updatedFields[typedField] = fieldMapping[typedField];
          updated = true;
        }
      } 
      if (updated) {
        await this.teamRepository.updateById(existTeam.id, updatedFields);
        const updatedTeam = await this.teamRepository.findById(existTeam.id);
        return updatedTeam;
      } else {
        return existTeam;
      }
    }
  }
}
