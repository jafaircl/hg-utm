import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-agency',
  templateUrl: './form-agency.component.html',
  styleUrls: ['./form-agency.component.scss']
})
export class FormAgencyComponent implements OnInit {
  
  constructor(public fs: FormService) { }

  ngOnInit() {
  }

}
