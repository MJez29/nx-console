import { Injectable, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, NavigationExtras } from '@angular/router';
import { filter, skip, take } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterNavigationService implements OnDestroy {
  private isFirstRoute = true;

  additionalNavigationSubscription = this.router.events
    .pipe(
      filter(evt => {
        return evt instanceof NavigationEnd;
      }),
      skip(1),
      take(1)
    )
    .subscribe(() => {
      this.isFirstRoute = false;
    });

  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) {}

  ngOnDestroy() {
    this.additionalNavigationSubscription.unsubscribe();
  }

  async goBackOrNavigateToFallback(fallback: any[], extras?: NavigationExtras) {
    if (this.isFirstRoute) {
      await this.router.navigate(fallback, extras);
    } else {
      this.location.back();
    }
  }
}
