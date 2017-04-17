import { Component, OnInit } from '@angular/core';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form-term',
  templateUrl: './form-term.component.html',
  styleUrls: ['./form-term.component.scss']
})
export class FormTermComponent implements OnInit {

  constructor(public fs: FormService) { }

  ngOnInit() {
  }

}
