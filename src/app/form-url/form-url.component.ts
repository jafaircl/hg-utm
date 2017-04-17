import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AngularFire } from 'angularfire2';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-url',
  templateUrl: './form-url.component.html',
  styleUrls: ['./form-url.component.scss']
})
export class FormUrlComponent implements OnInit {
  user: any;

  constructor(public fs: FormService,
              public af: AngularFire,
              public router: Router) {
    this.af.auth.subscribe(auth => this.user = auth.auth);
  }

  ngOnInit() {
  }
  
  saveUtm(){
    let today = new Date();
    
    this.af.database.list('/utms').push({
      name: this.fs.name,
      utm: this.fs.utm,
      url: this.fs.url,
      fullUrl: this.fs.fullUrl,
      userDisplayName: this.user.displayName,
      userEmail: this.user.email,
      userPhoto: this.user.photoURL,
      date: `${today.getMonth()}/${today.getDate()}/${today.getFullYear()}`,
      notes: 'Notes...'
    }).then(a => {
      this.router.navigateByUrl('/utm/' + a.path.o[1]);
    });
  }

}
