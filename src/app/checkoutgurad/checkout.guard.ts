import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // you can add your own logic here (like login check)
    const isLoggedIn = true; // just an example

    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

// import { CanActivateFn } from '@angular/router';
// import { Projectdata } from '../projectdata';
//   let p = new Projectdata();

// export const checkoutGuard: CanActivateFn = (route, state) => {
//   return false
// };
