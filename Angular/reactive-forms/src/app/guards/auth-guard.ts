import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../login-service';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate{
  loginService = inject(LoginService);
  router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.loginService.isAuthenticated()){
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
