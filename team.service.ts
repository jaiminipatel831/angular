import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  uri = 'http://localhost:27017/football';

  constructor(private http: HttpClient) { 
  }
  getTeam(){
    return this.http.get('${this.uri}/myteam');
  }
  deleteTeam(id) {
    return this.http.get(`${this.uri}/team/delete/${id}`);
  }
  addTeam(first_name, rushing_yard, touchdown_thrown, sacks, made_and_missed_fieldgoals, catches_made){
    const team = {
      first_name: first_name,
      rushing_yard: rushing_yard,
      touchdown_thrown: touchdown_thrown,
      sacks: sacks,
      made_and_missed_fieldgoals: made_and_missed_fieldgoals,
      catches_made: catches_made
    };
    return this.http.post('${this.uri}/myteam', team);
  }
  updateTeam(first_name, rushing_yard, touchdown_thrown, sacks, made_and_missed_fieldgoals, catches_made){
    const team = {
      first_name: first_name,
      rushing_yard: rushing_yard,
      touchdown_thrown: touchdown_thrown,
      sacks: sacks,
      made_and_missed_fieldgoals: made_and_missed_fieldgoals,
      catches_made: catches_made
    };
    return this.http.post('${this.uri}/myteam/update/${id}', team);
  }
}
