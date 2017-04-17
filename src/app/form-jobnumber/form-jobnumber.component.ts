import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-jobnumber',
  templateUrl: './form-jobnumber.component.html',
  styleUrls: ['./form-jobnumber.component.scss']
})
export class FormJobnumberComponent implements OnInit {

  constructor(public fs: FormService) { }

  ngOnInit() {
  }

}
