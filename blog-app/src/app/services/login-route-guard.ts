import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private sharedService: SharedService) {}

  canActivate() {
    return this.sharedService.isLoggedIn();
  }
}
