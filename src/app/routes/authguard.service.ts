import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, Observer } from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class AuthGuardService implements CanActivate
{
    constructor(private router:Router)
    {
        
    }
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean
    {
        console.log('checking guard');
        return new Observable((observer:Observer<boolean>) => {
            observer.next(true);
            //observer.next(false);
            //this.router.navigate(['/not-found']);
        })
    }
}