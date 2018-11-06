import { EventEmitter } from "@angular/core";

export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  getActiveUsers() {
    return this.activeUsers;
  }

  getInactiveUsers() {
    return this.inactiveUsers;
  }

}