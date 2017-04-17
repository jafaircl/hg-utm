import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-channel',
  templateUrl: './form-channel.component.html',
  styleUrls: ['./form-channel.component.scss']
})
export class FormChannelComponent implements OnInit {
  options: Array<any> = [
    {value: 'select', name: 'Select a channel...'},
    {value: 'display', name: 'Display'},
    {value: 'search', name: 'Search'},
    {value: 'social', name: 'Social'},
    {value: 'email', name: 'E-Mail'},
    {value: 'directmail', name: 'Direct Mail'},
    {value: 'print', name: 'Print'},
    {value: 'outdoor', name: 'Outdoor'},
    {value: 'video', name: 'Video'}
  ];
  channel: any;

  constructor(public fs: FormService) {
    this.channel = fs.channel;
  }

  ngOnInit() {
  }
  
  setSourceMedium(){
    this.fs.setSource('hg');
    this.fs.setMedium(this.fs.channel);
  }
}
