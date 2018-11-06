import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];
  activeUserCount: number;
  inactiveUserCount: number;

  constructor(private usersService: UsersService,
    private counterService: CounterService) { }

  ngOnInit(): void {
    this.activeUsers = this.usersService.getActiveUsers();
    this.inactiveUsers = this.usersService.getInactiveUsers();

    this.usersService.userSetToInactive.subscribe(
      (id: number) => {
        this.usersService.inactiveUsers.push(this.usersService.activeUsers[id]);
        this.usersService.activeUsers.splice(id, 1);
        this.inactiveUserCount = this.counterService.setInactiveUser();
      }
    );

    this.usersService.userSetToActive.subscribe(
      (id: number) => {
        this.usersService.activeUsers.push(this.usersService.inactiveUsers[id]);
        this.usersService.inactiveUsers.splice(id, 1);
        this.activeUserCount = this.counterService.setActiveUser();
      }
    );
  }
}
