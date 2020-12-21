import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from './team.service';
import { Team } from './team.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myteam';
  team: Team[];
  displayedColumns = ['first_name', 'rushing_yard', 'touchdown_thrown', 'sacks', 'made_and_missed_fieldgoals', 'catches_made']
  constructor(private teamService: TeamService, private router: Router){}
  
  ngOnInit(){
    this.fetchData();
  }
  fetchData(){
    this.teamService.getTeam().subscribe((data: Team[]) => {
      this.team = data;
      console.log('requested');
      console.log(this.team);
    });
  }

  editTeam(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteTeam(id) {
    this.teamService.deleteTeam(id).subscribe(() => {
      this.fetchData();
    });
  }
  
}



