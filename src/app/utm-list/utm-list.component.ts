import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-utm-list',
  templateUrl: './utm-list.component.html',
  styleUrls: ['./utm-list.component.scss']
})
export class UtmListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  search: FirebaseListObservable<any[]>;
  filtered = [];
  
  constructor(public af: AngularFire) {
    this.items = af.database.list('/utms');
  }

  ngOnInit() {
  }
  
  filter(val){
    this.items.subscribe(snapshots => {
      this.filtered = [];
      snapshots.forEach(snapshot => {
        if(snapshot.name.toLowerCase().includes(val.toLowerCase())){
          this.filtered.push(snapshot);
        }
      });
    });
  }
}
