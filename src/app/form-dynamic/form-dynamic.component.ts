import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent implements OnInit {
  dynamic: any;
  options = [
    {name:'Ad Group ID', value:'adgroupid={adgroupid}', checked:false},
    {name:'Ad Position', value:'adposition={adposition}', checked:false}, // search only
    {name:'Campaign ID', value:'campaignid={campaignid}', checked:false},
    {name:'Creative ID', value:'creative={creative}', checked:false},
    {name:'Device', value:'device={device}', checked:false},
    {name:'Device Model', value:'devicemodel={devicemodel}', checked:false}, // display only
    {name:'Keyword', value:'keyword={keyword}', checked:false}, // search only
    {name:'Location of Interest ID', value:'loc_interest_ms={loc_interest_ms}', checked:false},
    {name:'Matchtype', value:'matchtype={matchtype}', checked:false}, // search only
    {name:'Physical Location ID', value:'loc_physical_ms={loc_physical_ms}', checked:false},
    {name:'Placement', value:'placement={placement}', checked:false}, // display only
    //{name:'Placement Target', value:'target={target}', checked:false}, // display only
  ];
  displayOptions = [
    {name:'Ad Group ID', value:'adgroupid={adgroupid}', checked:false},
    {name:'Campaign ID', value:'campaignid={campaignid}', checked:false},
    {name:'Creative ID', value:'creative={creative}', checked:false},
    {name:'Device', value:'device={device}', checked:false},
    {name:'Device Model', value:'devicemodel={devicemodel}', checked:false}, // display only
    {name:'Location of Interest ID', value:'loc_interest_ms={loc_interest_ms}', checked:false},
    {name:'Physical Location ID', value:'loc_physical_ms={loc_physical_ms}', checked:false},
    {name:'Placement', value:'placement={placement}', checked:false}, // display only
  ];
  searchOptions = [
    {name:'Ad Group ID', value:'adgroupid={adgroupid}', checked:false},
    {name:'Ad Position', value:'adposition={adposition}', checked:false}, // search only
    {name:'Campaign ID', value:'campaignid={campaignid}', checked:false},
    {name:'Creative ID', value:'creative={creative}', checked:false},
    {name:'Device', value:'device={device}', checked:false},
    {name:'Keyword', value:'keyword={keyword}', checked:false}, // search only
    {name:'Location of Interest ID', value:'loc_interest_ms={loc_interest_ms}', checked:false},
    {name:'Matchtype', value:'matchtype={matchtype}', checked:false}, // search only
    {name:'Physical Location ID', value:'loc_physical_ms={loc_physical_ms}', checked:false},
  ];

  constructor(public fs: FormService) { }

  ngOnInit() {
    console.log(this.fs.dynamic);
  }
  
  selectedOptions(options) {
    return options.filter(opt => opt.checked)
              .map(opt => opt.value);
  }
}
