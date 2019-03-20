import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

import { AppRoutes } from '../routing/app-routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isApp: boolean;

  constructor(
    private router: Router,
    private routeLocation: Location,
  ) { }

  ngOnInit() {
    this.createRouteActions();
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.createRouteActions();
      }
    });
  }

  createRouteActions() {
    console.log('Created Route Actions')
    var isApp = false;

    for (var i in AppRoutes) {
      const route = AppRoutes[i];
      const path = this.routeLocation.path().slice(0, route.length);
      if (route === path) {
        isApp = true;
      }
    }

    this.isApp = isApp;
  }
}
