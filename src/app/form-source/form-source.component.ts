import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-source',
  templateUrl: './form-source.component.html',
  styleUrls: ['./form-source.component.scss']
})
export class FormSourceComponent implements OnInit {
  source: any;
  displayOptions: Array<any> = [
    {value: 'select', name: 'Select a source...'},
    {value: 'google', name: 'Google'},
    {value: 'bing', name: 'Bing'},
    {value: 'yahoo', name: 'Yahoo'},
    {value: 'one2one', name: 'One2One'}
  ];
  searchOptions: Array<any> = [
    {value: 'select', name: 'Select a source...'},
    {value: 'google', name: 'Google'},
    {value: 'bing', name: 'Bing'},
    {value: 'yahoo', name: 'Yahoo'}
  ];
  socialOptions: Array<any> = [
    {value: 'select', name: 'Select a source...'},
    {value: 'facebook', name: 'Facebook'},
    {value: 'twitter', name: 'Twitter'},
    {value: 'pinterest', name: 'Yahoo'},
    {value: 'linkedin', name: 'LinkedIn'}
  ];
  videoOptions: Array<any> = [
    {value: 'select', name: 'Select a source...'},
    {value: 'youtube', name: 'YouTube'},
    {value: 'vimeo', name: 'Vimeo'},
  ];

  constructor(public fs: FormService) {
    this.source = fs.source;
  }

  ngOnInit() {
  }

}
