import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PagespeedService } from '../pagespeed.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-utm-detail',
  templateUrl: './utm-detail.component.html',
  styleUrls: ['./utm-detail.component.scss']
})
export class UtmDetailComponent implements OnInit {
  item: FirebaseObjectObservable<any[]>;
  utm: any;
  testResult: any;
  mobileData: any;
  desktopData: any;
  messages: any;
  user: any;
  
  constructor(public af: AngularFire,
              public route: ActivatedRoute,
              public router: Router,
              public pss: PagespeedService) {
    this.af.auth.subscribe(auth => this.user = auth.auth);
    this.route.params.subscribe(params => { 
      this.item = af.database.object('/utms/' + params['id']);
      this.utm = this.item['utm'];
      this.messages = af.database.list('/messages', {
        query: {
          orderByChild: 'utmId',
          equalTo: params['id']
        }
      }).map(messages => {
        if(messages){
          return messages.sort((a,b)=>{
            return b.date - a.date;
          });
        }
      });
    });
  }

  ngOnInit() {
  }
  
  update(url, utm){
    this.updateUrl(url);
    this.updateUtm(utm);
    this.item.update({ fullUrl: url + utm });
  }
  
  updateUrl(val){
    this.item.update({ url: val });
    console.log(val);
  }
  
  updateUtm(val){
    this.item.update({ utm: val });
    console.log(val);
  }
  
  updateName(val){
    this.item.update({ name: val });
    console.log(val);
  }

  deleteItem(){
    this.item.remove().then(a => {
      this.router.navigateByUrl('/');
    });
  }
  
  saveNotes(val){
    this.item.update({ notes: val });
  }
  
  testUrl(url){
    this.item.subscribe(item => {
      if(item['url'] !== ''){
        this.mobileData = this.pss.analyzeUrl(item['url']);
        this.desktopData = this.pss.analyzeUrl(item['url'], 'desktop');
      }
    });
  }
  
  sendMessage(messageForm){
    if(messageForm.value !== '') {
      this.af.database.list('/messages').push({
        utmId: this.item.$ref['path']['o'][1],
        message: messageForm.value,
        userDisplayName: this.user.displayName,
        userEmail: this.user.email,
        userPhoto: this.user.photoURL,
        userId: this.user.uid,
        formattedDate: new Date().toLocaleString(),
        date: Date.now()
      });
      messageForm.value = '';
    }
  }
  
  deleteMessage(messageId){
    this.messages.remove(messageId);
  }
}
