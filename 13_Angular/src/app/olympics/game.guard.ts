import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class GameGuard implements CanActivate {
    
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
        if(this.isValidParam(route.params.id)) return true;
        this.router.navigate(['games/notfound']);
    }

    isValidParam(id) {
        if(!isNaN(id) && parseInt(id) < 5 ) return true;
        else return false;
    }
}