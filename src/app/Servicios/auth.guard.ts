import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) { }
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		var isAuthenticated = this.authService.logIn;
		if (isAuthenticated) {
			this.router.navigate(['/perfil']);
		}
		return isAuthenticated;
	}
}
