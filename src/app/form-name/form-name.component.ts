import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-name',
  templateUrl: './form-name.component.html',
  styleUrls: ['./form-name.component.scss']
})
export class FormNameComponent implements OnInit {

  constructor(public fs: FormService) { }

  ngOnInit() {
  }

}
