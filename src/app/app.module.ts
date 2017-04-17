import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { ClipboardModule } from 'ngx-clipboard';

import { FormService } from './form.service';
import { PagespeedService } from './pagespeed.service';

import { AppComponent } from './app.component';
import { FormChannelComponent } from './form-channel/form-channel.component';
import { FormSourceComponent } from './form-source/form-source.component';
import { FormMediumComponent } from './form-medium/form-medium.component';
import { FormCampaignComponent } from './form-campaign/form-campaign.component';
import { FormServicelineComponent } from './form-serviceline/form-serviceline.component';
import { FormJobnumberComponent } from './form-jobnumber/form-jobnumber.component';
import { FormCustomComponent } from './form-custom/form-custom.component';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { FormUrlComponent } from './form-url/form-url.component';
import { FormTermComponent } from './form-term/form-term.component';
import { FormContentComponent } from './form-content/form-content.component';
import { FormNameComponent } from './form-name/form-name.component';
import { FormAgencyComponent } from './form-agency/form-agency.component';
import { LoginComponent } from './login/login.component';
import { UtmListComponent } from './utm-list/utm-list.component';
import { UtmDetailComponent } from './utm-detail/utm-detail.component';

const appRoutes: Routes = [
  { path: '', component: UtmListComponent },
  { path: 'name', component: FormNameComponent },
  { path: 'channel', component: FormChannelComponent },
  { path: 'source', component: FormSourceComponent },
  { path: 'medium', component: FormMediumComponent },
  { path: 'campaign', component: FormCampaignComponent },
  { path: 'serviceline', component: FormServicelineComponent },
  { path: 'job-number', component: FormJobnumberComponent },
  { path: 'custom', component: FormCustomComponent },
  { path: 'dynamic', component: FormDynamicComponent },
  { path: 'url', component: FormUrlComponent },
  { path: 'term', component: FormTermComponent },
  { path: 'content', component: FormContentComponent },
  { path: 'agency', component: FormAgencyComponent },
  { path: 'utm/:id', component: UtmDetailComponent }
];

export const firebaseConfig = {
  apiKey: "AIzaSyAAH2JDbV_RvE4oIY4mVNp7hNcrQqbYN-Q",
  authDomain: "hg-utm.firebaseapp.com",
  databaseURL: "https://hg-utm.firebaseio.com",
  projectId: "hg-utm",
  storageBucket: "hg-utm.appspot.com",
  messagingSenderId: "1004944069635"
};

@NgModule({
  declarations: [
    AppComponent,
    FormChannelComponent,
    FormSourceComponent,
    FormMediumComponent,
    FormCampaignComponent,
    FormServicelineComponent,
    FormCustomComponent,
    FormDynamicComponent,
    FormJobnumberComponent,
    FormUrlComponent,
    FormTermComponent,
    FormContentComponent,
    LoginComponent,
    UtmListComponent,
    UtmDetailComponent,
    FormNameComponent,
    FormAgencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    ClipboardModule
  ],
  providers: [
    FormService,
    PagespeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
