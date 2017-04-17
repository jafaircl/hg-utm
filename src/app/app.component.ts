import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  path: any;

  constructor(public fs: FormService,
              public af: AngularFire,
              public router: Router) {
    router.events.subscribe((val) => {
        this.path = location.pathname;
    });
    this.af.auth.subscribe(auth => console.log(auth));
  }

  login(){
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(auth => location.reload());
  }

  logout() {
    this.af.auth.logout().then(auth => location.reload());
  }

}
