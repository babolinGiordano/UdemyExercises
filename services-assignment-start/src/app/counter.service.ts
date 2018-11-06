export class CounterService {

  activeUserCount: number = 0;
  inactiveUserCount: number = 0;

  setActiveUser() {
    this.activeUserCount = this.activeUserCount + 1;
    return this.activeUserCount;
  }

  setInactiveUser() {
    this.inactiveUserCount = this.inactiveUserCount + 1;
    return this.inactiveUserCount;
  }

}